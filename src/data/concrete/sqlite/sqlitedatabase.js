require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const dbPath = process.env.SQLITEPATH;

class SQLiteDatabase {

  async connect() {
    const connectedDb = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
      } else {
        console.log('Connected to the SQLite database.');
      }
    });
    console.log(connectedDb)
    const rows = await this.query(connectedDb,'SELECT * FROM pizza')
    // const rows = await new Promise((resolve, reject) => {
    //   connectedDb.all('SELECT * FROM pizza',[], (err, rows) => {
    //     if (err) {
    //       return reject(err);
    //     }
    //     resolve(rows);
    //   });
    // });
    // connectedDb.all('SELECT * FROM pizza',[])
    console.log('rows are : ',rows)
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

  query(db,sql, params = []) {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  }

  run(db, sql, params = []) {
    return new Promise((resolve, reject) => {
      db.run(sql, params, function (err) {
        if (err) {
          return reject(err);
        }
        resolve(this.lastID);
      });
    });
  }
}

module.exports = SQLiteDatabase;