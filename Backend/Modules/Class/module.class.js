const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    tasktitle: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    taskdescription: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    teacherid: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    implevel: {
        type: String,
        trim: true
    },  
    validtill: {
        type: String,
        trim: true
    },
    extrainfo : {

    },
    status: {
        type: String,
        default: "not approved"
    },
});

const Class = mongoose.model('class', ClassSchema);
module.exports = Class;
