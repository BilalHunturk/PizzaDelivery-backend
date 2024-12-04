require('dotenv').config();
const INGREDIENT_SERVICE_DB_TYPE = process.env.INGREDIENT_SERVICE_DB_TYPE;

let ingredientService;

if (INGREDIENT_SERVICE_DB_TYPE === 'mongodb') {
  ingredientService = require('./mongodb/ingredientService');
} else if (INGREDIENT_SERVICE_DB_TYPE === 'sqlite') {
  ingredientService = require('./sqlite/ingredientService');
}
module.exports = ingredientService;