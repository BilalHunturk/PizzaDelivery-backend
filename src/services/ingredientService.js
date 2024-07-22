const DatabaseFactory = require('../data/concrete/databaseFactory');
const Ingredient = require('../models/ingredient');

const dbType = 'sqlite';
const dbConfig = { dbPath: 'C:/Users/Bilal/Desktop/Works/Projects/PizzaDelivery/Back-end/src/data/concrete/sqlite/pizzaDelivery.db' };
const db = DatabaseFactory.createDatabase(dbType, dbConfig);

db.connect();

class IngredientService {
  static async createIngredient(ingTypeId, pizzaId, totalPrice, totalAmount) {
    const sql = 'INSERT INTO ingredient (ing_type_id, pizza_id, total_price, total_amount) VALUES (?, ?, ?, ?)';
    const params = [ingTypeId, pizzaId, totalPrice, totalAmount];
    const id = await db.run(sql, params);
    return new Ingredient(id, ingTypeId, pizzaId, totalPrice, totalAmount);
  }

  static async getAllIngredients() {
    const sql = 'SELECT * FROM ingredient';
    const rows = await db.query(sql);
    return rows.map(row => new Ingredient(row.id, row.ing_type_id, row.pizza_id, row.total_price, row.total_amount));
  }

  static async getIngredientById(id) {
    const sql = 'SELECT * FROM ingredient WHERE id = ?';
    const params = [id];
    const rows = await db.query(sql, params);
    if (rows.length === 0) {
      return null;
    }
    const row = rows[0];
    return new Ingredient(row.id, row.ing_type_id, row.pizza_id, row.total_price, row.total_amount);
  }

  static async deleteIngredientById(id) {
    const sql = 'DELETE FROM ingredient WHERE id = ?';
    const params = [id];
    await db.run(sql, params);
    return { message: `Ingredient with id ${id} deleted successfully` };
  }

  static async updateIngredientById(id, ingTypeId, pizzaId, totalPrice, totalAmount) {
    const sql = 'UPDATE ingredient SET ing_type_id = ?, pizza_id = ?, total_price = ?, total_amount = ? WHERE id = ?';
    const params = [ingTypeId, pizzaId, totalPrice, totalAmount, id];
    await db.run(sql, params);
    return new Ingredient(id, ingTypeId, pizzaId, totalPrice, totalAmount);
  }
}

module.exports = IngredientService;