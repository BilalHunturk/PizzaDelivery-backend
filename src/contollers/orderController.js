const OrderService = require('../services/orderService');

// (pizzaId: any, userId: any, amount: any, date: any, status: any, paymentMethod: any): Promise<Order>
class OrderController {
  static async createOrder(req, res) {
    const { pizzaId, userId, amount, date, status, paymentMethod } = req.body;
    try {
      const order = await OrderService.createOrder(pizzaId, userId, amount, date,status,paymentMethod);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllOrder(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getOrderById(req, res) {
    const { id } = req.params;
    try {
      const order = await OrderService.getOrderById(id);
      if (!order) {
        res.status(404).json({ message: ';Order not found' });
      } else {
        res.status(200).json(order);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteOrderById(req, res) {
    const { id } = req.params;
    try {
      await OrderService.deleteOrderById(id);
      res.status(200).json({ message: `Order with id ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateOrderById(req, res) {
    const { id } = req.params;
    const { pizzaId,userId, amount, date, status, paymentMethod } = req.body;
    try {
      const user = await OrderService.updateOrderById(id,pizzaId,userId,amount,date,status,paymentMethod)
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrderController;
