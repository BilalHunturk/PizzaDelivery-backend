const DatabaseFactory = require('../data/concrete/databaseFactory');
const IngredientType = require('../models/ingredientType');

const dbType = 'sqlite';
const dbConfig = { dbPath: 'C:/Users/Bilal/Desktop/Works/Projects/PizzaDelivery/Back-end/src/data/concrete/sqlite/pizzaDelivery.db' };
const db = DatabaseFactory.createDatabase(dbType, dbConfig);

db.connect();

class IngredientTypeService {
  static async createIngredientType(name, imageUrl, pricePerMinAmount, minAmount) {
    const sql = 'INSERT INTO ingredient_type (name, imageUrl, price_per_min_amount, min_amount) VALUES (?, ?, ?, ?)';
    const params = [name, imageUrl, pricePerMinAmount, minAmount];
    const id = await db.run(sql, params);
    return new IngredientType(id, name, imageUrl, pricePerMinAmount, minAmount);
  }

  static async getAllIngredientTypes() {
    const sql = 'SELECT * FROM ingredient_type';
    const rows = await db.query(sql);
    return rows.map(row => new IngredientType(row.id, row.name, row.imageUrl, row.price_per_min_amount, row.min_amount));
  }

  static async getIngredientTypeById(id) {
    const sql = 'SELECT * FROM ingredient_type WHERE id = ?';
    const params = [id];
    const rows = await db.query(sql, params);
    if (rows.length === 0) {
      return null;
    }
    const row = rows[0];
    return new IngredientType(row.id, row.name, row.imageUrl, row.price_per_min_amount, row.min_amount);
  }

  static async deleteIngredientTypeById(id) {
    const sql = 'DELETE FROM ingredient_type WHERE id = ?';
    const params = [id];
    await db.run(sql, params);
    return { message: `Ingredient type with id ${id} deleted successfully` };
  }

  static async updateIngredientTypeById(id, name, imageUrl, pricePerMinAmount, minAmount) {
    const sql = 'UPDATE ingredient_type SET name = ?, imageUrl = ?, price_per_min_amount = ?, min_amount = ? WHERE id = ?';
    const params = [name, imageUrl, pricePerMinAmount, minAmount, id];
    await db.run(sql, params);
    return new IngredientType(id, name, imageUrl, pricePerMinAmount, minAmount);
  }
}

module.exports = IngredientTypeService;