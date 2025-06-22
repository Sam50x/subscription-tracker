import User from '../models/user.model.js'

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()

        if (!users || users.length === 0) {
            const err = new Error('No Users found')
            err.statusCode = 404
            throw err
        }

        res.status(200).json({
            success: true,
            message: "Users found",
            data: {
                users
            }
        })
    }
    catch (e) {
        next(e)
    }
}

export const getOneUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password')

        if (!user) {
            const err = new Error('No Users found with this email')
            err.statusCode = 404
            throw err
        }

        res.status(200).json({
            success: true,
            message: "User was found",
            data: {
                user
            }
        })
    }
    catch (e) {
        next(e)
    }
}

export const createUser = async (req, res, next) => {
    res.json({ msg: 'Create a user' })
}

export const updateUser = async (req, res, next) => {
    res.json({ msg: 'Update a user' })
}

export const deleteUser = async (req, res, next) => {
    res.json({ msg: 'delete a user' })
}