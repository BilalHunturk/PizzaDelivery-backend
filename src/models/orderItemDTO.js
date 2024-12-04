class OrderItem {
    constructor(id, orderId, pizzaId, quantity, totalPrice, date, status) {
      this.id = id;
      this.orderId= orderId;
      this.pizzaId = pizzaId;
      this.quantity = quantity;
      this.totalPrice = totalPrice;
      this.date = date;
      this.status = status;
    }
  }

  module.exports = OrderItem;