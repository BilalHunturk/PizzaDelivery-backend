const CartItemService = require("../services/CartItemService");
const CartService = require("../services/cartService");
const PizzaService = require("../services/pizzaService");

//
class CartItemController {
  static async createCartItem(req, res) {
    const user = req.user;
    const { pizzaId, quantity } = req.body; //
    // console.log('REQ USERID IS =====',req.user);
    try {
      const cart = await CartService.getCartByUserId(req.user.id);
      if (!cart) {
        return res.status(401).json("This is not your Cart.");
      }
      const pizza = await PizzaService.getPizzaById(pizzaId);
      if (!pizza) return res.status(400).json("There is no pizza with that id");
      const totalPrice = pizza.price * quantity;

      // needed to check if cartItem exist in the db so that the quantity is going to increse.
      const userCartItems = await CartItemService.getCartItemsByUserId(req.user.id);

      const existedCartItem = userCartItems?.find((cartItem) => cartItem.pizzaId === pizzaId);
      const cartId = cart.id;
      if (existedCartItem) {
        existedCartItem.quantity += quantity;
        console.log(existedCartItem);
        const updatedCartItem = await CartItemService.updateCartItemById({
          id:existedCartItem.id,
          cartId:cart.id,
          pizzaId:existedCartItem.pizzaId,
          quantity:existedCartItem.quantity,
          totalPrice:pizza.price*existedCartItem.quantity,
        });
        return res.status(201).json(updatedCartItem);
      }

      const cartItem = await CartItemService.createCartItem({
        cartId: cart.id,
        pizzaId,
        quantity,
        totalPrice,
      });

      res.status(201).json(cartItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllCartItems(req, res) {
    try {
      const CartItems = await CartItemService.getAllCartItems();
      res.status(200).json(CartItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCartItemById(req, res) {
    const { id } = req.params;
    try {
      const CartItem = await CartItemService.getCartItemById(id);
      if (!CartItem) {
        res.status(404).json({ message: ";Order not found" });
      } else {
        res.status(200).json(CartItem);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteCartItemById(req, res) {
    const { id } = req.params;
    try {
      await CartItemService.deleteCartItemById(id);
      res
        .status(200)
        .json({ message: `Order with id ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateCartItemById(req, res) {
    const { id } = req.params;
    const { cartId, pizzaId, quantity, totalPrice } = req.body;
    try {
      const CartItem = await CartItemService.updateCartItemById({
        id,
        cartId,
        pizzaId,
        quantity,
        totalPrice,
      });
      res.status(200).json(CartItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCartItemsbyUserId(req, res) {
    try {
      const cartItems = await CartItemService.getCartItemsByUserId(req.user.id);
      if (!cartItems) {
        return res.status(200).json("There is no Carts. Create One");
      }
      return res.status(200).json({ cartItems: cartItems });
    } catch (error) {}
  }
}

module.exports = CartItemController;
