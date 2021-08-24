const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Accountant/controller.student.payment');

module.exports = function () {
    //POST Student Payment
    router.post('/create', controller.createStudentPayment);
    //GET Student Payment
    router.get('/', controller.getAllStudentPayment);
    router.get('/photo/:id', controller.photo);
    router.get("/:id", controller.read);
    //GET Student Payment By ID
    router.param("id", controller.studentPaymentById);
    //DELETE Student Payment By ID
    router.delete('/delete/:id', controller.deleteById);
    //UPDATE payment status
    router.put('/update/:id', controller.updateById);
    //UPDATE payment status
    router.put('/update-status/:id', controller.updateStatus);
    return router;
}