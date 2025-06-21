import { Router } from "express";
import { getAllSubscriptions, getOneSubscription, createSubscription, updateSubscription, deleteSubscription, getUserSubscription, cancelSubscription, getUpcomingRenewals } from '../models/subscription.model.js'

const subscriptionRouter = Router()

subscriptionRouter.route('/').get(getAllSubscriptions).post(createSubscription)
subscriptionRouter.route('/:id').get(getOneSubscription).patch(updateSubscription).delete(deleteSubscription)
subscriptionRouter.route('/user/:id').get(getUserSubscription)
subscriptionRouter.route('/:id/cancel').put(cancelSubscription)
subscriptionRouter.route('/upcoming-renewals').get(getUpcomingRenewals)

export default subscriptionRouter