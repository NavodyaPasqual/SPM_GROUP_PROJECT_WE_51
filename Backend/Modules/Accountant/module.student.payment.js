const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const StudentPaymentSchema = new mongoose.Schema(
        {
            name: {
                type: String,
                    required: true,
                    trim: true,
                    min: 1,
                    max: 50
            },
            contactNo: {
                type: String,
                required: true
            },
            studentID: {
                type: String,
                required: true,
                min: 1,
                max: 20
            },
            depositedAmount : {
                type: Number,
                required: true
            },
            depositedDate: {
                type: Date,
                required: true
            },
            bank: {
                type: String,
                trim: true,
                required: true
            },
            branch: {
                type: String,
                trim: true,
                required: true
            },
            paymentSlip: {
                data: Buffer,
                contentType: String
            },
            status: {
                type: String,
                default: "not decided"
            },
            type: {
                type: String,
                required: true,
            },
            classes: {
                type: String,
                required: true,
            },
            teacher: {
                type: String,
                required: true,
            }
            /*class: [{
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                ref: 'classes'
            }],*/
            /*teacher: [{
                type: mongoose.Schema.Types.ObjectId,
                required: false,
                ref: 'teachers'
            }]*/
    },
    { timestamps: true}
);

module.exports = mongoose.model('studentpayments', StudentPaymentSchema);