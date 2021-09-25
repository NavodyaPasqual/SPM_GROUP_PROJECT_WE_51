const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const CompanyPaymentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            min: 1,
            max: 50
        },
        amount : {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        type: {
            type: String,
            required: true,
        }
    },
    { timestamps: true}
);

module.exports = mongoose.model('companypayments', CompanyPaymentSchema);