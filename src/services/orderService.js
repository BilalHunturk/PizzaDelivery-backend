const DatabaseFactory = require('../data/concrete/databaseFactory');
const Order = require('../models/order');

const dbType = 'sqlite';
const dbConfig = { dbPath: 'C:/Users/Bilal/Desktop/Works/Projects/PizzaDelivery/Back-end/src/data/concrete/sqlite/pizzaDelivery.db' };
const db = DatabaseFactory.createDatabase(dbType, dbConfig);

db.connect();

class OrderService {
  static async createOrder(pizzaId, userId, amount, date, status, paymentMethod) {
    const sql = 'INSERT INTO `order` (pizza_id, user_id, amount, date, status, payment_method) VALUES (?, ?, ?, ?, ?, ?)';
    const params = [pizzaId, userId, amount, date, status, paymentMethod];
    const id = await db.run(sql, params);
    return new Order(id, pizzaId, userId, amount, date, status, paymentMethod);
  }

  static async getAllOrders() {
    const sql = 'SELECT * FROM `order`';
    const rows = await db.query(sql);
    return rows.map(row => new Order(row.id, row.pizza_id, row.user_id, row.amount, row.date, row.status, row.payment_method));
  }

  static async getOrderById(id) {
    const sql = 'SELECT * FROM `order` WHERE id = ?';
    const params = [id];
    const rows = await db.query(sql, params);
    if (rows.length === 0) {
      return null;
    }
    const row = rows[0];
    return new Order(row.id, row.pizza_id, row.user_id, row.amount, row.date, row.status, row.payment_method);
  }

  static async deleteOrderById(id) {
    const sql = 'DELETE FROM `order` WHERE id = ?';
    const params = [id];
    await db.run(sql, params);
    return { message: `Order with id ${id} deleted successfully` };
  }

  static async updateOrderById(id, pizzaId, userId, amount, date, status, paymentMethod) {
    const sql = 'UPDATE `order` SET pizza_id = ?, user_id = ?, amount = ?, date = ?, status = ?, payment_method = ? WHERE id = ?';
    const params = [pizzaId, userId, amount, date, status, paymentMethod, id];
    await db.run(sql, params);
    return new Order(id, pizzaId, userId, amount, date, status, paymentMethod);
  }
}

module.exports = OrderService;