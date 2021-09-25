const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Student/controller.student');

module.exports = function () {
    router.post('/createStudent', controller.createStudent);
    router.get('/', controller.getAllStudents);
    router.get('/:id', controller.getReferancesForStudent);
    router.get('/getParticularStudent', controller.getPerticulerStudent);
    router.put('/UpdateParticularStudent/:id', controller.updateStudentDetails);
    router.get('/getDetailsForStudent/:id', controller.getDetailsForStudent);
    return router;
}

