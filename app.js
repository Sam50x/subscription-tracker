import express from 'express'
import { PORT } from './config/env.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'

const app = express()

app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users/', userRouter)
app.use('/api/v1/subscriptions/', subscriptionRouter)

app.get('/', (req, res) => {
    res.send('Welcome to my Subscription Tracker API, bitch!')
})

app.listen(PORT, () => {
    console.log(`Subscription Tracking API is listening on [http://localhost:${PORT}]`)
})

export default app