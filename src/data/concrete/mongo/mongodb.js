require('dotenv').config();
const mongoose = require('mongoose');
const IDatabase = require('../../abstract/interface/IDatabase');
const db = process.env.MONGOADDRESS;

class MongoDb extends IDatabase {
     
    static async connect() {
        // return await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        return await mongoose.connect(db)
        .then(function (collection) { console.log(' Successfully Connected to MongoDb') })
        .catch(function (collection) { console.log(' Could NOT Connected to MongoDb')});
    }

    disconnect() {
        throw new Error('disconnect method not implemented');
    }

    query(sql, params) {
        throw new Error('query method not implemented');
    }

    run(sql, params) {
        throw new Error('run method not implemented');
    }

}

const connectMongo = async () => {
    try {
        
    } catch (error) {

    }
}

module.exports = MongoDb