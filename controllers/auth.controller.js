import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import User from "../models/user.model.js"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js"

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession()
    session.startTransaction()

    try {
        const { email, name, password } = req.body

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const err = new Error('User already exists')
            err.statusCode = 409
            throw err
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUsers = await User.create([{ name, email, password: hashedPassword }], { session })

        const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

        await session.commitTransaction()
        session.endSession()

        res.status(201).json({
            success: true,
            msg: 'User created successfully',
            data: {
                token,
                user: newUsers[0]
            }
        })
    }
    catch (e) {
        await session.abortTransaction()
        session.endSession()
        next(e)
    }
}

export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            const err = new Error('User does not exist')
            err.statusCode = 404
            throw err
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            const err = new Error('Password is not correct')
            err.statusCode = 401
            throw err
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

        res.status(200).json({
            success: true,
            message: 'User signed in successfully',
            data: {
                token,
                user
            }
        })
    }
    catch (e) {
        next(e)
    }
}

export const signOut = async (req, res, next) => {
    res.json({ msg: 'sign-Out' })
}