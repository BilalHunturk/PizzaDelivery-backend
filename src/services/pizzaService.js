require('dotenv').config();
const PIZZA_SERVICE_DB_TYPE = process.env.PIZZA_SERVICE_DB_TYPE;

let PizzaService;

if (PIZZA_SERVICE_DB_TYPE === 'mongodb') {
    PizzaService = require('./mongodb/pizzaService');
} else if (PIZZA_SERVICE_DB_TYPE === 'sqlite') {
    PizzaService = require('./sqlite/pizzaService');
}
module.exports = PizzaService;