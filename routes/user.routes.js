import { Router } from "express";
import { getAllUsers, getOneUser, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router()

userRouter.route('/').get(getAllUsers).post(createUser)
userRouter.route('/:id').get(authorize, getOneUser).patch(authorize, updateUser).delete(authorize, deleteUser)

export default userRouter