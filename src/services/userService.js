const DatabaseFactory = require('../data/concrete/databaseFactory');
const User = require('../models/user');

const dbType = 'sqlite';
const dbConfig = { dbPath: 'C:/Users/Bilal/Desktop/Works/Projects/PizzaDelivery/Back-end/src/data/concrete/sqlite/pizzaDelivery.db' };
const db = DatabaseFactory.createDatabase(dbType, dbConfig);

db.connect();

class UserService {
  static async createUser(username, password, role) {
    const sql = 'INSERT INTO user (username, password, role) VALUES (?, ?, ?)';
    const params = [username, password, role];
    const id = await db.run(sql, params);
    return new User(id, username, password, role);
  }

  static async getAllUsers() {
    const sql = 'SELECT * FROM user';
    const rows = await db.query(sql);
    return rows.map(row => new User(row.id, row.username, row.password, row.role));
  }

  static async getUserById(id) {
    const sql = 'SELECT * FROM user WHERE id = ?';
    const params = [id];
    const rows = await db.query(sql, params);
    if (rows.length === 0) {
      return null;
    }
    const row = rows[0];
    return new User(row.id, row.username, row.password, row.role);
  }

  static async deleteUserById(id) {
    const sql = 'DELETE FROM user WHERE id = ?';
    const params = [id];
    await db.run(sql, params);
    return { message: `User with id ${id} deleted successfully` };
  }

  static async updateUserById(id, username, password, role) {
    const sql = 'UPDATE user SET username = ?, password = ?, role = ? WHERE id = ?';
    const params = [username, password, role, id];
    await db.run(sql, params);
    return new User(id, username, password, role);
  }
}

module.exports = UserService;