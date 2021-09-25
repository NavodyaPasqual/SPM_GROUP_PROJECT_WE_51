const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Student/controller.studentNotices');

module.exports = function () {
    router.post('/createStudentNotices', controller.CreateStudentNotices);  //Used At Main Page creation
    router.get('/GetAllStudentNotices', controller.getAllStudentNotices);

    router.get('/GetSpecificNotices/:id', controller.getSpecificNotices);
    return router;
}