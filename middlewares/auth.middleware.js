import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/env.js"
import User from "../models/user.model.js"

const authorize = async (req, res, next) => {
    try {
        let token

        const authHeader = req.headers.authorization

        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.split(' ')[1]
        }

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized' })
        }

        const decoded = jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decoded.userId)

        if (!user) {
            res.status(401).json({ success: false, message: 'Unauthorized'})
        }

        req.user = user

        next()
    }
    catch (e) {
        res.status(401).json({ success: false, message: 'Unauthorized', error: e })
    }
}

export default authorize