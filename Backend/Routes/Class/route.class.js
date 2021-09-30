const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Teacher/controller.teacherTask');

module.exports = function () {
    router.post('/createTeacherTask', controller.createteacherTask);  
    router.get('/TeacherTask', controller.getAllteacherTask);
    router.get('/TeacherTask/:id', controller.viewteacherTaskById);
    router.put('/TeacherTask/:id', controller.updateById);
    router.delete('/TeacherTask/:id', controller.deleteById);
    return router;
}