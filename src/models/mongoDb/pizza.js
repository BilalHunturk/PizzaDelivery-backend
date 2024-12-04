const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    id: Number,
    name: String,
    size: String,
    doughSize: String,
    price: Number,
    pizzaImg: String
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;