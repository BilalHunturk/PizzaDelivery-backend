class CartItem {
    constructor(id, cartId, pizzaId, quantity, totalPrice) {
      this.id= id;
      this.cartId= cartId;
      this.pizzaId = pizzaId;
      this.quantity = quantity;
      this.totalPrice = totalPrice;
    }
  }
  
  module.exports = CartItem;