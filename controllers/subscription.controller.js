import Subscription from '../models/subscription.model.js'

export const getAllSubscriptions = async (req, res) => {
    res.json({ msg: 'Get all subscriptions' })
}

export const getOneSubscription = async (req, res) => {
    res.json({ msg: 'Get One subscription' })
}

export const createSubscription = async (req, res, next) => {
    try {
        const sub = await Subscription.create({ ...req.body, user: req.user._id })

        res.status(201).json({ success: true, msg: 'Subscription created successfully', data: { subscription: sub } })
    }
    catch (e) {
        next(e)
    }
}

export const updateSubscription = async (req, res) => {
    res.json({ msg: 'Update a subscription' })
}

export const deleteSubscription = async (req, res) => {
    res.json({ msg: 'Delete a subscription' })
}

export const getUserSubscriptions = async (req, res, next) => {
    try {

        if (req.params.id !== req.user.id) {
            res.status(401).json({ success: false, msg: "You don't own that account you are trying to access" })
        }

        const subscriptions = await Subscription.find({ user: req.params.id })

        if (!subscriptions || subscriptions.length === 0) {
            res.status(404).json({ success: false, msg: "No subscriptions found" })
        }

        res.status(200).json({ success: true, msg: "Subscriptions found", data: { subscriptions } })
    }
    catch (e) {
        next(e)
    }
}

export const cancelSubscription = async (req, res) => {
    res.json({ msg: 'Get all subscription' })
}

export const getUpcomingRenewals = async (req, res) => {
    res.json({ msg: 'Get all subscription' })
}