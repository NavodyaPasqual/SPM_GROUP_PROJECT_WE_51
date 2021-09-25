const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Student/controller.feedback');

module.exports = function () {
    router.post('/createFeedBack', controller.CreateFeedBack);  //Used At Main Page creation
    router.get('/GetAllFeedBack', controller.getAllFeedBack);
    router.get('/GetSpecificFeedBack/:id', controller.getSpecificFeedBack);
    router.get('/GetAllFeedBackForParticularUser/:receivers', controller.getTestAllFeedBack);
    return router;
}