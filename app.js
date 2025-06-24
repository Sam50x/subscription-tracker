import express from 'express'
import { PORT } from './config/env.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import connectToDatabase from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'
import arcjetMiddleware from './middlewares/arcjet.middleware.js'
import cookieParser from 'cookie-parser'
import workflowRouter from './routes/workflow.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use(errorMiddleware)
app.use(arcjetMiddleware)

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users/', userRouter)
app.use('/api/v1/subscriptions/', subscriptionRouter)
app.use('/api/v1/workflows/', workflowRouter)

app.get('/', (req, res) => {
    res.send('Welcome to my Subscription Tracker API, bitch!')
})

app.listen(PORT, async () => {
    await connectToDatabase()
    console.log(`Subscription Tracking API is listening on [http://localhost:${PORT}]`)
})

export default app