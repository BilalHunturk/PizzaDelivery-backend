const express = require('express');
const UserController = require('../contollers/userController'); // Adjust the path as needed

const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.get('/user/:id', UserController.getUserById);
router.post('/user', UserController.createUser);
router.delete('/user/:id', UserController.deleteUserById);
router.put('/user/:id', UserController.updateUserById);

module.exports = router;