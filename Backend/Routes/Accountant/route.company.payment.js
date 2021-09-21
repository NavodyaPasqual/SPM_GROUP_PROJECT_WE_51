const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Accountant/controller.company.payment');

module.exports = function () {
    //POST Company Payment
    router.post('/create', controller.createCompanyPayment);
    //GET Company Payment
    router.get('/', controller.getAllCompanyPayment);
    //GET Company Payment By ID
    router.get('/:id', controller.companyPaymentById);
    //DELETE Company Payment By ID
    router.delete('/delete/:id', controller.deleteById);
    //UPDATE payment status
    router.put('/update/:id', controller.updateById);
    return router;
}