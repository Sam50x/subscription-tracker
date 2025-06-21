// import User from '../models/user.model.js'

export const getAllUsers = async (req, res) => {
    res.json({ msg: 'Get all users' })
}

export const getOneUser = async (req, res) => {
    res.json({ msg: 'Get One user' })
}

export const createUser = async (req, res) => {
    res.json({ msg: 'Create a user' })
}

export const updateUser = async (req, res) => {
    res.json({ msg: 'Update a user' })
}

export const deleteUser = async (req, res) => {
    res.json({ msg: 'delete a user' })
}