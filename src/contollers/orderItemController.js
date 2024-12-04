const OrderItemService = require('../services/orderItemService');

// (pizzaId: any, userId: any, amount: any, date: any, status: any, paymentMethod: any): Promise<Order>
class OrderItemController {
  static async createOrderItem(req, res) {
    const { orderId, pizzaId, quantity, totalPrice, date, status } = req.body;
    try {
      const orderItem = await OrderItemService.createOrderItem({ orderId, pizzaId, quantity, totalPrice, date, status });
      res.status(201).json(orderItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllOrderItems(req, res) {
    try {
      const orderItems = await OrderItemService.getAllOrderItems();
      res.status(200).json(orderItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getOrderItemById(req, res) {
    const { id } = req.params;
    try {
      const orderItem = await OrderItemService.getOrderItemById(id);
      if (!orderItem) {
        res.status(404).json({ message: 'OrderItem not found' });
      } else {
        res.status(200).json(orderItem);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteOrderItemById(req, res) {
    const { id } = req.params;
    try {
      await OrderItemService.deleteOrderItemById(id);
      res.status(200).json({ message: `OrderItem with id ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateOrderItemById(req, res) {
    const { id } = req.params;
    const { orderId, pizzaId, quantity, totalPrice, date, status } = req.body;
    try {
      const user = await OrderItemService.updateOrderItemById({id, orderId, pizzaId, quantity, totalPrice, date, status })
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrderItemController;
