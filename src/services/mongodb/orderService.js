const OrderRepository = require('./repositories/orderRepository');
const orderRepository = new OrderRepository()


class OrderService {

    static async createOrder(data) {
        return await orderRepository.create(data);
    }

    static async getOrderById(id) {
        return await orderRepository.getById(id);
    }

    static async getAllOrders() {
        return await orderRepository.getAll();
    }
    static async deleteOrderById(id) {
        return await orderRepository.deleteById(id);
    }

    static async updateOrderById(params) {
        return await orderRepository.updateOrderById(params);
    }
}
module.exports = OrderService;