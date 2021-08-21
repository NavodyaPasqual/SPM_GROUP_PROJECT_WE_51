const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Teacher/controller.teacher');

module.exports = function () {
    router.post('/createTeacher', controller.createTeacher);
    router.get('/', controller.getAllTeachers);
    router.get('/viewbyid/:id', controller.viewTeacherById);
    router.put('/update/:id', controller.updateById);
    router.delete('/delete/:id', controller.deleteById);
    return router;
}
