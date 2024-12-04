const mongoose = require('mongoose');

const ingredientTypeSchema = new mongoose.Schema({
    id: Number,
    imageUrl: String,
    name: String,
    pricePerMinAmount: String,
    minAmount: Number,
});

const IngredientType = mongoose.model('IngredientType', ingredientTypeSchema);

module.exports = IngredientType;