import { Hono } from 'hono';
import { PrismaClient, Product } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { cors } from 'hono/cors';

const appRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    HONO_R2_UPLOAD: R2Bucket;  // Make sure R2Bucket is correctly imported in your project
  };
  Variables: {
    userId: string;
  };
}>();

// Enable CORS with appropriate headers
appRouter.use('*', cors({
  origin: 'http://localhost:5173',
  allowMethods: ['POST', 'GET', 'OPTIONS', 'DELETE', 'PUT'],
  allowHeaders: ['Authorization', 'Content-Type'],
}));

// Utility function for Prisma client instantiation
const prismaClientFactory = (databaseUrl: string) => {
  const prisma = new PrismaClient({
    datasourceUrl: databaseUrl,
  }).$extends(withAccelerate());
  return prisma;
};

// Input validation function (now typesafe)
const validateFileAndProductInput = (
  file: File | undefined,
  brand: string,
  size: string,
  color: string,
  category: string
) => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB file size limit
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif']; // Allowed file types

  if (!file) throw new Error('File is required.');
  if (!(file instanceof File)) throw new Error('Invalid file.');
  if (!ALLOWED_FILE_TYPES.includes(file.type)) throw new Error('Unsupported file type.');
  if (file.size > MAX_FILE_SIZE) throw new Error('File size exceeds limit.');

  if (!brand || !size || !color || !category) {
    throw new Error('All product fields (brand, size, color, category) are required.');
  }
};

// Upload route with TypeScript types
appRouter.post("/upload", async (c) => {
  try {
    const body = await c.req.parseBody();
    const file = body["filename"] as File | undefined;
    const brand = body["brand"] as string;
    const size = body["size"] as string;
    const color = body["color"] as string;
    const category = body["category"] as string;

    validateFileAndProductInput(file, brand, size, color, category);  // Validate input

    // Upload the file to Cloudflare R2
    if (!file) throw new Error("File not found.");
    await c.env.HONO_R2_UPLOAD.put(file.name, file);

    const prisma = prismaClientFactory(c.env.DATABASE_URL);

    // Save product details to the database
    const product = await prisma.product.create({
      data: {
        name: file.name,
        description: 'Product description here',
        price: 0,
        brandName: brand,
        size: size,
        color: color,
        category: category,
      },
    });

    await prisma.$disconnect();  // Close Prisma client

    return c.json({ message: "File and product data saved successfully", product });
  } catch (error) {
    return c.text(error instanceof Error ? error.message : "Internal server error", 500);
  }
});

// List files route with pagination and type safety
appRouter.get("/files", async (c) => {
  const page = parseInt(c.req.query('page') || '1', 10); // Convert to number
  const limit = parseInt(c.req.query('limit') || '10', 10); // Default to 10 items per page
  const offset = (page - 1) * limit;

  try {
    const list = await c.env.HONO_R2_UPLOAD.list({ limit, cursor: offset.toString() });
    const files = list.objects.map((object) => ({
      key: object.key,
      size: object.size,
      lastModified: object.uploaded,
      url: `https://pub-2e47dfc86e05405d9cf4825234979297.r2.dev/${object.key}`,
    }));

    const prisma = prismaClientFactory(c.env.DATABASE_URL);
    const products: Product[] = await prisma.product.findMany({
      skip: offset,
      take: limit,
    });

    // Map products to files
    const filesWithDetails = files.map((file) => {
      const product = products.find((p) => p.name === file.key);
      return {
        ...file,
        brand: product?.brandName || 'Unknown',
        sizeDescription: product?.size || 'Unknown',
        color: product?.color || 'Unknown',
        category: product?.category || 'Unknown',
      };
    });

    await prisma.$disconnect();  // Close Prisma client

    return c.json({ files: filesWithDetails, page, limit });
  } catch (error) {
    return c.text("Error fetching files", 500);
  }
});

// Delete file route with error handling
appRouter.delete("/files/:key", async (c) => {
  const fileKey = c.req.param("key");

  try {
    await c.env.HONO_R2_UPLOAD.delete(fileKey);

    const prisma = prismaClientFactory(c.env.DATABASE_URL);

    await prisma.product.deleteMany({
      where: { name: fileKey },
    });

    await prisma.$disconnect();  // Close Prisma client

    return c.json({ message: "File deleted successfully" });
  } catch (error) {
    return c.text("Error deleting file", 500);
  }
});

// Delete files by brand with type-safe Prisma
appRouter.delete("/files/brand/:brandName", async (c) => {
  const brandName = c.req.param("brandName");

  try {
    const prisma = prismaClientFactory(c.env.DATABASE_URL);

    const products = await prisma.product.findMany({ where: { brandName } });

    for (const product of products) {
      await c.env.HONO_R2_UPLOAD.delete(product.name);
      await prisma.product.delete({ where: { id: product.id } });
    }

    await prisma.$disconnect();  // Close Prisma client

    return c.json({ message: `All files for brand ${brandName} have been deleted.` });
  } catch (error) {
    return c.text("Error deleting files for brand", 500);
  }
});

// Update product details route with TypeScript types
appRouter.put("/files/:id", async (c) => {
  const id = parseInt(c.req.param('id'), 10);
  const { brandName, size, color }: { brandName: string, size: string, color: string } = await c.req.json();

  try {
    const prisma = prismaClientFactory(c.env.DATABASE_URL);

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { brandName, size, color },
    });

    await prisma.$disconnect();  // Close Prisma client

    return c.json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    return c.text(`Error updating product with ID ${id}`, 500);
  }
});

export default appRouter;
