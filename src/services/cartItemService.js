require('dotenv').config();
const CART_ITEM_SERVICE_DB_TYPE = process.env.CART_ITEM_SERVICE_DB_TYPE;

let cartItemService;

if (CART_ITEM_SERVICE_DB_TYPE === 'mongodb') {
  cartItemService = require('./mongodb/cartItemService');
} else if (CART_ITEM_SERVICE_DB_TYPE === 'sqlite') {
  cartItemService = require('./sqlite/cartItemService');
}
module.exports = cartItemService;