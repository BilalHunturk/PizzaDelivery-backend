require('dotenv').config();
const INGREDIENT_TYPE_SERVICE_DB_TYPE = process.env.INGREDIENT_TYPE_SERVICE_DB_TYPE;

let ingredientTypeService;

if (INGREDIENT_TYPE_SERVICE_DB_TYPE === 'mongodb') {
  ingredientTypeService = require('./mongodb/ingredientTypeService');
} else if (INGREDIENT_TYPE_SERVICE_DB_TYPE === 'sqlite') {
  ingredientTypeService = require('./sqlite/ingredientTypeService');
}
module.exports = ingredientTypeService;