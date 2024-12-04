const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    ingTypeId: Number,
    pizzaId: Number,
    totalPrice: Number,
    totalAmount: Number,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;