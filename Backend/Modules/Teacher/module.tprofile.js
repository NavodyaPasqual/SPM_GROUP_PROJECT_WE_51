const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({

    registrationNumber: {
        type: String,
        required: true,
    },
    fName: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    lName: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    NIC: {
        type: String,
        trim: true
    },
    passportNumber: {
        type: String,
        trim: true
    },
    address : {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    contactNumber: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    email: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    password : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    editedDate: {
        type: Date,
    },


});

const Profile = mongoose.model('teacherprofile', ProfileSchema);
module.exports = Profile;
