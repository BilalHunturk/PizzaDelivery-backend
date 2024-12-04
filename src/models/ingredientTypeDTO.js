class IngredientType {
    constructor(id, imageUrl, name, pricePerMinAmount, minAmount) {
      this.id= id;
      this.imageUrl= imageUrl;
      this.name= name;
      this.pricePerMinAmount = pricePerMinAmount;
      this.minAmount = minAmount;
    }
  }
  
  module.exports = IngredientType;