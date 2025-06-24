import { Router } from "express";
import { sendReminders } from "../controllers/workflow.controller";

const workflowRouter = Router()

workflowRouter.route('/').get(sendReminders)

export default workflowRouter