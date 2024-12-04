require('dotenv').config({path:'../../../../.env'});
const mongoose = require('mongoose');
const db = process.env.db;
console.log(db)
const modelNames = [
    'Order',
    'Ingredient',
    'IngredientType',
    'Pizza',
    'User',
    'UserDetail'
];

const createCollections = async () => {
    mongoose.connect(db).then(()=>{
        const Schema = new mongoose.Schema({});
        
        modelNames.forEach(modelName => {
            const model = new mongoose.model(modelName, Schema);
            model.createCollection().then(function (collection) { console.log(modelName+' collection created.') });
        })
    })
}

createCollections();
