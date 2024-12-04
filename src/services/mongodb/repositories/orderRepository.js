const MongoDbBaseRepository = require('./mongoDbBaseRepository');
const Order = require('../../../models/mongoDb/order');

class OrderRepository extends MongoDbBaseRepository {
    constructor() {
        super(Order);
    }

    async updateOrderById(params) {
        const { id, userId, totalPrice, paymentMethod, date, status } = params;
        return await Order.findByIdAndUpdate(id, { userId: userId, totalPrice: totalPrice, paymentMethod : paymentMethod, date: date, status: status })
    }
}

module.exports = OrderRepository;