class Cart {
    constructor(id, userId, totalPrice, discount) {
      this.id= id;
      this.userId= userId;
      this.totalPrice = totalPrice;
      this.discount = discount;
    }
  }
  
  module.exports = Cart;