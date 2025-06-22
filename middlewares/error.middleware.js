const errorMiddleware = (err, req, res, next) => {
    try {
        let e = { ...err }
        e.message = err.message
        console.error(e)

        if (e.name === 'CastError') {
            const message = 'Resource not found'
            e = new Error(message)
            e.statusCode = 404
        }
        if (e.code === 11000) {
            const message = 'Duplicate field value entered'
            e = new Error(message)
            e.statusCode = 400
        }
        if (err.name === 'ValidationError') {
            const message = Object.values(e.errors).map(val => val.message)
            e = new Error(message.join(', '))
            e.statusCode = 400
        }

        res.status(e.statusCode || 500).json({ success: false, error: e.message || 'Server Error' })
    }
    catch (e) {
        next(e)
    }
}

export default errorMiddleware