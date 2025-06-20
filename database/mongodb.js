import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from '../config/env.js'

if (!DB_URI) {
    throw new Error(`Please define the MONGODB_URI env variable inside .env.${NODE_ENV}.local`)
}

const connectToDatabase = async () =>{
    try {
        await mongoose.connect(DB_URI)
        console.log(`Database connected in ${NODE_ENV} mode successfully`)
    } catch (e) {
        console.error(`Error Caught: ${e}`)
        process.exit(1)
    }
}

export default connectToDatabase