const express = require('express');
const CartItemController = require('../contollers/cartItemController'); // Adjust the path as needed
const { authenticateToken, tokenCheck, authorizeRoles} = require('../middleware/Jwt/authMiddleware');

const router = express.Router();

router.post('/cartItem', authenticateToken, authorizeRoles('user','tester','admin'), CartItemController.createCartItem);
router.get('/cartItems', authenticateToken, CartItemController.getCartItemsbyUserId);
router.get('/cartItem/:id', CartItemController.getCartItemById);
router.delete('/cartItem/:id', CartItemController.deleteCartItemById);
router.put('/cartItem/:id', CartItemController.updateCartItemById);

module.exports = router;