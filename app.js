import express from 'express'
import { PORT } from './config/env.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to my Subscription Tracker API, bitch!')
})

app.listen(PORT, () => {
    console.log(`Subscription Tracking API is listening on [http://localhost:${PORT}]`)
})

export default app