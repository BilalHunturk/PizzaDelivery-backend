const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: Number,
    totalPrice: Number,
    paymentMethod: Date,
    date:String,
    status: String
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;