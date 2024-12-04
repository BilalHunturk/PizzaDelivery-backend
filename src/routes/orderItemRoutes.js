const express = require('express');
const OrderItemController = require('../contollers/orderItemController'); // Adjust the path as needed

const router = express.Router();

router.post('/orderItem', OrderItemController.createOrderItem);
router.get('/orderItems', OrderItemController.getAllOrderItems);
router.get('/orderItem/:id', OrderItemController.getOrderItemById);
router.delete('/orderItem/:id', OrderItemController.deleteOrderItemById);
router.put('/orderItem/:id', OrderItemController.updateOrderItemById);

module.exports = router;