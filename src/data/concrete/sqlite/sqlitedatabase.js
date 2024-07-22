
const sqlite3 = require('sqlite3').verbose();
const IDatabase = require('../../abstract/interface/IDatabase');

class SQLiteDatabase extends IDatabase {
  constructor(dbPath) {
    super();
    this.dbPath = dbPath;
    this.db = null;
  }

  connect() {
    this.db = new sqlite3.Database(this.dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
      } else {
        console.log('Connected to the SQLite database.');
      }
      console.log(this.dbPath)
    });
  }

  disconnect() {
    this.db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      } else {
        console.log('Disconnected from the SQLite database.');
      }
    });
  }

  query(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          return reject(err);
        }
        resolve(this.lastID);
      });
    });
  }
}

module.exports = SQLiteDatabase;