import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price:{
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Subscription price cannot be negative'],
        max: [100, 'Subscription price cannot exceed 100'],
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'EGP'],
        default: 'USD',
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
        type: String,
        enum: ['entertainment', 'utilities', 'food', 'health', 'other'],
        default: 'other',
        required: [true, 'Subscription category is required'],
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['active', 'expired', 'cancelled'],
        default: 'active',
    },
    startDate: {
        type: Date,
        required: [true, 'Subscription start date is required'],
        validate: {
            validator: (value) => value <= new Date(),
            message: 'Start date cannot be in the future',
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator:  function(value){
                return value > this.startDate;
            },
            message: 'Renewal date must be after the start date',
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required to associate the subscription'],
        index: true,
    }
}, { timestamps: true });

subscriptionSchema.pre('save', function (next){
    if (!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        }

        const daysToAdd = renewalPeriods[this.frequency]
        const date = new Date(this.startDate)
        date.setDate(date.getDate() + daysToAdd)
        this.renewalDate = new Date(date)
    }

    if (this.renewalDate < this.startDate) {
        this.status = 'expired'
    }

    next()
})

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;