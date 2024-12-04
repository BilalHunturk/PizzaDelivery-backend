const SQLiteBaseRepository = require('./sqliteBaseRepository');
const OrderItem = require('../../../models/orderItemDTO');
const modelName = 'order_item' + 's'

class OrderItemRepository extends SQLiteBaseRepository {
    constructor() {
        super(OrderItem, modelName);
    }
    // data = { name, imageUrl, pricePerMinAmount, minAmount }
    async createOrderItem(data) {
        const sql = 'INSERT INTO ' + modelName + ' (order_id, pizza_id, quantity, total_price,date,status) VALUES (?,?,?,?,?,?)';
        const params = [data.orderId, data.pizzaId, data.quantity, data.totalPrice, data.date, data.status];
        const id = this.create({ sql, params });
        return new OrderItem(id, data.order_id, data.pizza_id, data.quantity, data.total_price,data.date,data.status);

    }
    // params = {id, name, imageUrl, pricePerMinAmount, minAmount}
    async updateOrderItemById(data) {
        const sql = 'UPDATE ' + modelName + ' SET order_id = ?, pizza_id = ?, quantity = ?, total_price = ? , date = ?, status = ?  WHERE id = ?';
        const params = [data.orderId, data.pizzaId, data.quantity, data.totalPrice, data.date, data.status];
        const updatedPizza = this.updateById({ sql, params });
        return updatedPizza;
    }

    async getOrderItemsByUserId(userId) {
        const sql = `    SELECT 
        oi.order_id as orderId,
        oi.pizza_id as pizzaId,
        oi.quantity as quantity,
        oi.total_price as totalPrice
                FROM order_items as oi
                JOIN orders as o ON oi.order_id = o.id
                WHERE o.user_id = ?;`;
        const params = [userId]
        const orderItems = await this.updateById({ sql, params });
        return orderItems;
    }
}

module.exports = OrderItemRepository;