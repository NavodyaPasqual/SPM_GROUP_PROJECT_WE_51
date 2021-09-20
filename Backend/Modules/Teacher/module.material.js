const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true,
        trim: true
    },
    subjectCode: {
        type: String,
        required: true,
        trim: true
    },
    lesson: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
        trim: true
    },
    lessonURL: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "not approved"
    },
});

const Material = mongoose.model('material', MaterialSchema);
module.exports = Material;
