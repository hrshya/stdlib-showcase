import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/User'
import { imageRouter } from './routes/Image'
import appRouter from './routes/app'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()

// app.use("/api/*", cors())
app.route("/api/v1/user", userRouter)
app.route("/api/v1/image", imageRouter)
app.route("/", appRouter)

export default app
