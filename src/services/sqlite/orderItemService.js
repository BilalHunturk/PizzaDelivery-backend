const OrderItemRepository = require('./repositories/orderItemRepository');
const orderItemRepository = new OrderItemRepository()


class OrderItemService {

    static async createOrderItem(data) {
        return await orderItemRepository.createOrderItem(data);
    }

    static async deleteOrderItemById(id) {
        return await orderItemRepository.deleteById(id);
    }

    static async getOrderItemById(id) {
        return await orderItemRepository.getById(id);
    }

    static async getAllOrderItems() {
        return await orderItemRepository.getAll()
    }
    static async updateOrderItemById(params){
        return await orderItemRepository.updateOrderItemById(params)
    }
    static async getOrderItemsByUserId(userId){
        return await orderItemRepository.getOrderItemsByUserId(userId);
    }
}
module.exports = OrderItemService;