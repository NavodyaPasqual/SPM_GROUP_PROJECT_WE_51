const mongoose = require('mongoose');  //Call mongoose Database

const FeedbackSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    receivers : { type: String, required: true },
    description: { type: String, required: true, trim: true },
}); //Create DB store type

const Feedbacks = mongoose.model('feedbacks', FeedbackSchema); //Create DB store type
module.exports = Feedbacks;