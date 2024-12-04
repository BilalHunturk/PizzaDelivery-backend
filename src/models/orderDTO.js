class Order {
    constructor(id, userId, totalPrice, date, status, paymentMethod) {
      this.id = id;
      this.userId= userId;
      this.totalPrice = totalPrice;
      this.paymentMethod = paymentMethod;
      this.date = date;
      this.status = status;
    }
  }
  
  module.exports = Order;