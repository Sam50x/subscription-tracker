import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 })

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit) {
                return res.status(429).json({ success: false, msg: 'Rate Limit exceeded because of too many requests' })
            }
            if (decision.reason.isBot) {
                return res.status(403).json({ success: false, msg: 'Bot Detected 🤖' })
            }

            return res.status(403).json({ success: false, msg: 'Access Denied' })
        }

        next()
    }
    catch (e) {
        console.log(`Arcjet Middleware Error: ${e}`)
        next(e)
    }
}

export default arcjetMiddleware