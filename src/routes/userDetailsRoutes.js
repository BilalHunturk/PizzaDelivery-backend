const express = require('express');
const UserDetailsController = require('../contollers/userDetailsController'); // Adjust the path as needed

const router = express.Router();

router.post('/userDetails', UserDetailsController.createUserDetails);
router.get('/userDetails', UserDetailsController.getAllUserDetails);
router.get('/userDetails/:userId', UserDetailsController.getUserDetailsByUserId);
router.delete('/userDetails/:userId', UserDetailsController.deleteUserDetailsByUserId);
router.put('/userDetails', UserDetailsController.updateUserDetailsByUserId);

module.exports = router;