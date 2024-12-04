const CartService = require('../services/cartService');

// (pizzaId: any, userId: any, amount: any, date: any, status: any, paymentMethod: any): Promise<Order>
class CartController {
  static async createCart(req, res) {

    const userid = req.user.id;
    console.log(userid);
    const { totalPrice, discount} = req.body; //
    const newCart = { userId:userid, totalPrice, discount};
    console.log(newCart);
    try {
      const cart = await CartService.createCart(newCart);
      res.status(201).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllCarts(req, res) {
    try {
      const carts = await CartService.getAllCarts();
      res.status(200).json(carts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCartById(req, res) {
    const { id } = req.params;
    try {
      const cart = await CartService.getCartById(id);
      if (!cart) {
        res.status(404).json({ message: ';Order not found' });
      } else {
        res.status(200).json(cart);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteCartById(req, res) {
    const { id } = req.params;
    try {
      await CartService.deleteCartById(id);
      res.status(200).json({ message: `Order with id ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateCartById(req, res) {
    const { id } = req.params;
    const {  userId, totalPrice, discount} = req.body;
    try {
      const cart = await CartService.updateCartById({ id, userId, totalPrice, discount})
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CartController;
