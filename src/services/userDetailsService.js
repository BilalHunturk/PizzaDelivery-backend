const DatabaseFactory = require('../data/concrete/databaseFactory');
const UserDetails = require('../models/userDetails');

const dbType = 'sqlite';
const dbConfig = { dbPath: 'C:/Users/Bilal/Desktop/Works/Projects/PizzaDelivery/Back-end/src/data/concrete/sqlite/pizzaDelivery.db' };
const db = DatabaseFactory.createDatabase(dbType, dbConfig);

db.connect();

class UserDetailsService {
  static async createUserDetails(userId, name, surname, email, phone) {
    const sql = 'INSERT INTO user_details (user_id, name, surname, email, phone) VALUES (?, ?, ?, ?, ?)';
    const params = [userId, name, surname, email, phone];
    await db.run(sql, params);
    return new UserDetails(userId, name, surname, email, phone);
  }

  static async getAllUserDetails() {
    const sql = 'SELECT * FROM user_details';
    const rows = await db.query(sql);
    return rows.map(row => new UserDetails(row.user_id, row.name, row.surname, row.email, row.phone));
  }

  static async getUserDetailsById(userId) {
    const sql = 'SELECT * FROM user_details WHERE user_id = ?';
    const params = [userId];
    const rows = await db.query(sql, params);
    if (rows.length === 0) {
      return null;
    }
    const row = rows[0];
    return new UserDetails(row.user_id, row.name, row.surname, row.email, row.phone);
  }

  static async deleteUserDetailsById(userId) {
    const sql = 'DELETE FROM user_details WHERE user_id = ?';
    const params = [userId];
    await db.run(sql, params);
    return { message: `User details with user id ${userId} deleted successfully` };
  }

  static async updateUserDetailsById(userId, name, surname, email, phone) {
    const sql = 'UPDATE user_details SET name = ?, surname = ?, email = ?, phone = ? WHERE user_id = ?';
    const params = [name, surname, email, phone, userId];
    await db.run(sql, params);
    return new UserDetails(userId, name, surname, email, phone);
  }
}

module.exports = UserDetailsService;