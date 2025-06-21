import { Router } from "express";
import { getAllUsers, getOneUser, createUser, updateUser, deleteUser } from "../controllers/user.controller";

const userRouter = Router()

userRouter.route('/').get(getAllUsers).post(createUser)
userRouter.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser)

export default userRouter