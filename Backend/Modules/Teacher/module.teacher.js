const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    gender: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    nic: {
        type: String,
        trim: true
    },
    passportNumber: {
        type: String,
        trim: true
    },
    regDate: {
        type: Date,
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
    qualificationType : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    academicInstitute : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    academicYear : {
        type: Number,
        required: true,
    },
    subjects : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    teachingInstitute : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },

    teachingYear : {
        type: Number,
        required: true,
    },
    majorSubjects : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    associationName : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    regNumber : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    experienceYear : {
        type: Number,
        required: true,
    },
    schoolName : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    taughtSubjects : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    dateFrom: {
        type: Date,
    },
    dateTo: {
        type: Date,
    },
    status: {
        type: String,
        default: "not approved"
    },
});

const Teacher = mongoose.model('teachers', TeacherSchema);
module.exports = Teacher;
