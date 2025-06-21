import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required to continue'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'Email is required to continue'],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 225,
        match: [
            /\S+@\S+.\S+/,
            'Please enter a valid email address'
        ]
    },
    password: {
        type: String,
        required: [true, 'Password is required to continue'],
        minLength: 6,
    },
}, { timestamps: true })

const User = mongoose.model('User', userSchema);
export default User;