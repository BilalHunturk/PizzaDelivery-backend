require('dotenv').config();
const ORDER_SERVICE_DB_TYPE = process.env.ORDER_SERVICE_DB_TYPE;

let orderService;

if (ORDER_SERVICE_DB_TYPE === 'mongodb') {
  orderService = require('./mongodb/orderService');
} else if (ORDER_SERVICE_DB_TYPE === 'sqlite') {
  orderService = require('./sqlite/orderService');
}
module.exports = orderService;