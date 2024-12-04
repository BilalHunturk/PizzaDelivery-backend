const express = require('express');
const CartController = require('../contollers/cartController'); // Adjust the path as needed
const { authenticateToken } = require('../middleware/Jwt/authMiddleware');

const router = express.Router();

router.post('/cart', authenticateToken,CartController.createCart);
router.get('/carts', CartController.getAllCarts);
router.get('/cart/:id', CartController.getCartById);
router.delete('/cart/:id', CartController.deleteCartById);
router.put('/cart/:id', CartController.updateCartById);

module.exports = router;