const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Teacher/controller.material');

module.exports = function () {
    router.post('/createMaterial', controller.createMaterial);
    router.get('/', controller.getAllMaterials);
    router.get('/viewbyid/:id', controller.viewMaterialById);
    router.put('/update/:id', controller.updateById);
    router.delete('/delete/:id', controller.deleteById);
    return router;
}
