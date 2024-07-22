const express = require('express');
const UserDetailsController = require('../contollers/userDetailsController'); // Adjust the path as needed

const router = express.Router();

router.post('/userDetails', UserDetailsController.createUserDetails);
router.get('/userDetails', UserDetailsController.getAllUserDetails);
router.get('/userDetails/:id', UserDetailsController.getUserDetailsById);
router.delete('/userDetails/:id', UserDetailsController.deleteUserDetailsById);
router.put('/userDetails/:id', UserDetailsController.updateUserDetailsById);

module.exports = router;