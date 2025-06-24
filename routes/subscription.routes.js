import { Router } from "express";
import { getAllSubscriptions, getOneSubscription, createSubscription, updateSubscription, deleteSubscription, getUserSubscriptions, cancelSubscription, getUpcomingRenewals } from '../controllers/subscription.controller.js'
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router()

subscriptionRouter.route('/').get(getAllSubscriptions).post(authorize, createSubscription)
subscriptionRouter.route('/:id').get(getOneSubscription).patch(updateSubscription).delete(deleteSubscription)
subscriptionRouter.route('/user/:id').get(authorize, getUserSubscriptions)
subscriptionRouter.route('/:id/cancel').put(cancelSubscription)
subscriptionRouter.route('/upcoming-renewals').get(getUpcomingRenewals)

export default subscriptionRouter