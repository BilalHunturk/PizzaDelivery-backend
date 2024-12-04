const express = require('express');
const OrderController = require('../contollers/orderController'); // Adjust the path as needed

const router = express.Router();

router.post('/order', OrderController.createOrder);
router.get('/orders', OrderController.getAllOrders);
router.get('/order/:id', OrderController.getOrderById);
router.delete('/order/:id', OrderController.deleteOrderById);
router.put('/order/:id', OrderController.updateOrderById);

module.exports = router;