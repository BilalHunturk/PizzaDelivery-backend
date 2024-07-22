class Order {
    constructor(id, pizzaId, userId, amount, date, status, paymentMethod) {
      this.id = id;
      this.pizzaId= pizzaId;
      this.userId= userId;
      this.amount = amount;
      this.date = date;
      this.status = status;
      this.paymentMethod = paymentMethod;
    }
  }
  
  module.exports = Order;