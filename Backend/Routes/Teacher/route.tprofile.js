const express = require('express');
const router = express.Router();
const controller = require('../../Controllers/Teacher/controller.tprofile');

module.exports = function () {
    router.post('/createProfile', controller.createProfile);
    router.get('/', controller.getAllProfiles);
    router.get('/viewbyid/:id', controller.viewProfileById);
    router.put('/update/:id', controller.updateProfileById);
    router.put('/update-all/:id', controller.updateById);
    router.delete('/delete/:id', controller.deleteProfileById);
    return router;
}
