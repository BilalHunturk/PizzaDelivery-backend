const sqlite3 = require('sqlite3').verbose();
const dbPath = './pizzaDelivery.db';

const db = new sqlite3.Database(dbPath);

// Create tables if they don't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username VARCHAR(255) NOT NULL,
      password TEXT NOT NULL,
      role TEXT CHECK(role IN ('admin', 'user')) NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS user_details (
      user_id INTEGER PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      surname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20),
      FOREIGN KEY(user_id) REFERENCES user(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS pizza (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255) NOT NULL,
      size TEXT CHECK(size IN ('small', 'medium', 'large')) NOT NULL,
      dough_size TEXT CHECK(dough_size IN ('thin', 'thick')) NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS ingredient_type (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      imageUrl VARCHAR(255),
      name VARCHAR(255) NOT NULL,
      price_per_min_amount REAL NOT NULL,
      min_amount REAL NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS ingredient (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ing_type_id INTEGER NOT NULL,
      pizza_id INTEGER NOT NULL,
      total_price REAL NOT NULL,
      total_amount REAL NOT NULL,
      FOREIGN KEY(ing_type_id) REFERENCES ingredient_type(id),
      FOREIGN KEY(pizza_id) REFERENCES pizza(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS \`order\` (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pizza_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      amount INTEGER NOT NULL,
      date TEXT NOT NULL,
      status TEXT CHECK(status IN ('pending', 'completed', 'cancelled')) NOT NULL,
      payment_method TEXT CHECK(payment_method IN ('cash', 'card')) NOT NULL,
      FOREIGN KEY(pizza_id) REFERENCES pizza(id),
      FOREIGN KEY(user_id) REFERENCES user(id)
    )
  `);

  // Insert sample data
  db.run(`
    INSERT INTO user (username, password, role) VALUES 
    ('admin', 'adminpass', 'admin'),
    ('user1', 'user1pass', 'user')
  `);

  db.run(`
    INSERT INTO user_details (user_id, name, surname, email, phone) VALUES 
    (1, 'Admin', 'User', 'admin@example.com', '1234567890'),
    (2, 'John', 'Doe', 'john.doe@example.com', '0987654321')
  `);

  db.run(`
    INSERT INTO pizza (name, size, dough_size) VALUES 
    ('Margherita', 'medium', 'thin'),
    ('Pepperoni', 'large', 'thick')
  `);

  db.run(`
    INSERT INTO ingredient_type (imageUrl, name, price_per_min_amount, min_amount) VALUES 
    ('image_url_1', 'Cheese', 0.5, 100),
    ('image_url_2', 'Pepperoni', 0.75, 50)
  `);

  db.run(`
    INSERT INTO ingredient (ing_type_id, pizza_id, total_price, total_amount) VALUES 
    (1, 1, 5.0, 200),
    (2, 2, 7.5, 100)
  `);

  db.run(`
    INSERT INTO \`order\` (pizza_id, user_id, amount, date, status, payment_method) VALUES 
    (1, 2, 1, '2023-07-01', 'completed', 'cash'),
    (2, 2, 2, '2023-07-02', 'pending', 'card')
  `);
});

db.close();

module.exports = db;
