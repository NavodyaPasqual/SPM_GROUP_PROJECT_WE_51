const mongoose = require('mongoose');  //Call mongoose Database

const StudentsNoticesSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    link : { type: String, required: true },
    receivers : { type: String, required: true },
    description: { type: String, required: true, trim: true },
}); //Create DB store type

const StudentsNotices = mongoose.model('notices', StudentsNoticesSchema); //Create DB store type
module.exports = StudentsNotices;