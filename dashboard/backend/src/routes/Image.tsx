import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@hrshya/medium-common"


export const imageRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
        HONO_R2_UPLOAD: R2Bucket;
    }, 
    Variables: {
        userId: string;
    }
}>();

// imageRouter.use("/*", async (c, next) => {
//     const authHeader = c.req.header("authorization") || "";
//     try {
//         const user = await verify(authHeader, c.env.JWT_SECRET);
//         if (user && typeof user.id === "string") {
            
//             c.set("userId", user.id);
//             await next();
//         } else {
//             c.status(403);
//             return c.json({
//                 message: "You are not logged in"
//             })
//         }
//     } catch(e) {
//         c.status(403);
//         return c.json({
//             message: "You are not logged in"
//         })
//     }
// });

// imageRouter.post('/', async (c) => {
//   try {
    
//   } catch (error:any) {
//     c.status(500);
//     return c.json({ message: 'Internal Server Error', error: error.message });
//   }
// });

