const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Accountant/controller.student.payment');

module.exports = function () {
    //POST Student Payment
    router.post('/create', controller.createStudentPayment);
    //GET Student Payment
    router.get('/', controller.getAllStudentPayment);
    //GET Student Payment By ID
    router.get('/viewbyid/:id', controller.viewStudentPaymentById);
    //DELETE Student Payment By ID
    router.delete('/delete/:id', controller.deleteById);
    //UPDATE payment status
    router.put('/update/:id', controller.updateById);
    return router;
}