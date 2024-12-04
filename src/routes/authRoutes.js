const express = require('express');
const AuthController = require('../contollers/authController')
const { authenticateToken, tokenCheck, authorizeRoles} = require('../middleware/Jwt/authMiddleware');

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register',AuthController.userRegister);
router.get('/test', authenticateToken, authorizeRoles('tester'));
router.get('/token',tokenCheck);

module.exports = router;