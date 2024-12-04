class Ingredient {
    constructor(ingTypeId, pizzaId, totalPrice, totalAmount) {
      this.ingTypeId= ingTypeId;
      this.pizzaId= pizzaId;
      this.totalPrice= totalPrice;
      this.totalAmount = totalAmount;
    }
  }
  
  module.exports = Ingredient;