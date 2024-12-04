require('dotenv').config();
const CART_SERVICE_DB_TYPE = process.env.CART_SERVICE_DB_TYPE;

let cartService;

if (CART_SERVICE_DB_TYPE === 'mongodb') {
  cartService = require('./mongodb/cartService');
} else if (CART_SERVICE_DB_TYPE === 'sqlite') {
  cartService = require('./sqlite/cartService');
}

module.exports = cartService;