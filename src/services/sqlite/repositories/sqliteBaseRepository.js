
require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const dbPath = process.env.SQLITEPATH;

class SQLiteBaseRepository {
    constructor(model, ModelName,) {
        this.Model = model;
        this.modelName = ModelName;
    }

    async create(data) {
        const db = await this.connect();
        const { sql, params } = data;
        const id = await this.query(db, sql, params).catch((err) => (console.log('SQLiteBaseRepository.create() has catched some error.\n', err)));
        this.disconnect(db);
        return id;
    }

    async runSqlWithParams(data) {
        const db = await this.connect();
        const { sql, params } = data;
        console.log('sql :',sql,'params',params)
        const row = await this.query(db, sql, params).catch((err) => (console.log('SQLiteBaseRepository.create() has catched some error.\n', err)));
        this.disconnect(db);
        return row;
    }


    async getAll() {
        const db = await this.connect();
        const sql = 'SELECT * FROM ' + this.modelName.toLowerCase();
        const rows = await this.query(db, sql).catch((err) => (console.log('SQLiteBaseRepository.getAll() has catched some error.\n', err)));
        this.disconnect(db);
        return rows;
    }

    async deleteById(id) {
        const db = await this.connect();
        const sql = 'DELETE FROM ' + this.modelName.toLowerCase() + ' WHERE id = ?';
        const params = [id];
        const res = await this.query(db, sql, params).catch((err) => (console.log('SQLiteBaseRepository.deleteById(id) has catched some error.\n', err)));
        this.disconnect(db);
        return res;
    }

    async updateById(data) {
        const db = await this.connect();
        const { sql, params } = data;
        const id = await this.query(db, data.sql, data.params).catch((err) => (console.log('SQLiteBaseRepository.updateById(id) has catched some error.\n', err)));
        this.disconnect(db);
        return id;
    }

    async getById(id) {
        const db = await this.connect();
        const sql = 'SELECT * FROM ' + this.modelName.toLowerCase() + ' WHERE id = ?';
        const params = [id]
        const rows = await this.query(db, sql, params).catch((err) => (console.log('SQLiteBaseRepository.getById(id) has catched some error.\n', err)));
        this.disconnect(db);
        return rows[0];
    }


    // Connect to sqlite
    async connect() {
        return new sqlite3.Database(dbPath, err => {
            if (err) {
                console.error('Error opening database:', err.message);
            } else {
                console.log('Connected to the SQLite database from SqliteRepository');
            }
        })
    }

    async disconnect(db) {
        db.close((err) => {
            if (err) {
                console.error('Error closing database:', err.message);
            } else {
                console.log('Disconnected from the SQLite database.');
            }
        });
    }

    // For SELECT queries to retrieve rows
    async run(db, sql, params = []) {
        return new Promise((resolve, reject) => {
            db.run(sql, params, function (err) {
                if (err) {
                    return reject(err);
                }
                resolve(this.lastID);
            });
        });
    }

    // For INSERT, UPDATE, DELETE
    async query(db, sql, params = []) {
        return new Promise((resolve, reject) => {
            db.all(sql, params, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                console.log('query has been successfull');
                resolve(rows);
            });
        });
    }
}

module.exports = SQLiteBaseRepository;