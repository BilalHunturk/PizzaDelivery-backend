const OrderRepository = require('./repositories/orderRepository');
const orderRepository = new OrderRepository()


class OrderService {

    static async createOrder(data) {
        return await orderRepository.createOrder(data);
    }

    static async deleteOrderById(id) {
        return await orderRepository.deleteById(id);
    }

    static async getOrderById(id) {
        return await orderRepository.getById(id);
    }

    static async getAllOrders() {
        return await orderRepository.getAll()
    }
    static async updateOrderById(params){
        return await orderRepository.updateOrderById(params)
    }
}
module.exports = OrderService;