import { Client as workflowClient } from "@upstash/workflow";
import { QSTASH_URL, QSTASH_TOKEN } from "./env";

export const client = new workflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN
})