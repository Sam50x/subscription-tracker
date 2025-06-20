import { Router } from "express";

const authRouter = Router()

authRouter.post('/sign-up', (req, res) => { res.json({ msg: 'Sign Up' }) })
authRouter.post('/sign-in', (req, res) => { res.json({ msg: 'Sign In' }) })
authRouter.post('/sign-out', (req, res) => { res.json({ msg: 'Sign Out' }) })

export default authRouter