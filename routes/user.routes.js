import { Router } from "express";

const userRouter = Router()

userRouter.get('/', (req, res) => { res.json({ msg: 'Get All Users' }) })
userRouter.get('/:id', (req, res) => { res.json({ msg: 'Get One User' }) })
userRouter.post('/', (req, res) => { res.json({ msg: 'Create a User' }) })
userRouter.patch('/:id', (req, res) => { res.json({ msg: 'Update a User' }) })
userRouter.delete('/:id', (req, res) => { res.json({ msg: 'Delete a User' }) })

export default userRouter