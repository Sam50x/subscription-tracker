import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => { res.json({ msg: 'Get all subscriptions' }) })
subscriptionRouter.get('/:id', (req, res) => { res.json({ msg: 'get one subscription' }) })
subscriptionRouter.post('/', (req, res) => { res.json({ msg: 'create a subscription' }) })
subscriptionRouter.patch('/:id', (req, res) => { res.json({ msg: 'update a subscription' }) })
subscriptionRouter.delete('/:id', (req, res) => { res.json({ msg: 'delete a subscription' }) })
subscriptionRouter.get('/user/:id', (req, res) => { res.json({ msg: 'get a user\'s subscriptions' }) })
subscriptionRouter.put('/:id/cancel', (req, res) => { res.json({ msg: 'cancel a subscription' }) })
subscriptionRouter.get('/upcoming-renewals', (req, res) => { res.json({ msg: 'get upcoming renewals' }) })

export default subscriptionRouter