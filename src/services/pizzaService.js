const DatabaseFactory = require('../data/concrete/databaseFactory');
const Pizza = require('../models/pizza');

// specify db type and 
const dbType = 'sqlite'; // this option can be taken from config file
const dbConfig = { dbPath: 'C:/Users/Bilal/Desktop/Works/Projects/PizzaDelivery/Back-end/src/data/concrete/sqlite/pizzaDelivery.db' };
const db = DatabaseFactory.createDatabase(dbType, dbConfig);

db.connect();

class PizzaService {

    static async createPizza(name, size, dough_size) {
        const sql = 'INSERT INTO pizza (name, size, dough_size) VALUES (?, ?, ?)';
        const params = [name, size, dough_size];
        const id = await db.run(sql, params);
        return new Pizza(id, name, size, dough_size);
    }
    
    static async getAllPizzas() {
        const sql = 'SELECT * FROM pizza';
        const rows = await db.query(sql);
        return rows.map(row => new Pizza(row.id, row.name, row.size, row.dough_size));
    }

    static async getPizzaById(id) {
        const sql = 'SELECT * FROM pizza WHERE id = ?';
        const params = [id];
        const rows = await db.query(sql, params);
        if (rows.length === 0) {
          return null;
        }
        const row = rows[0];
        return new Pizza(row.id, row.name, row.size, row.dough_size);
    }
  
    static async deletePizzaById(id) {
        const sql = 'DELETE FROM pizza WHERE id = ?';
        const params = [id];
        await db.run(sql, params);
        return { message: `Pizza with id ${id} deleted successfully` };
    }
    
    static async updatePizzaById(id, name, size, dough_size) {
        const sql = 'UPDATE pizza SET name = ?, size = ?, dough_size = ? WHERE id = ?';
        const params = [name, size, dough_size, id];
        await db.run(sql, params);
        return new Pizza(id, name, size, dough_size);
    }
  }
  
  module.exports = PizzaService;