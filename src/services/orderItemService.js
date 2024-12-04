require('dotenv').config();
const ORDER_ITEM_SERVICE_DB_TYPE = process.env.ORDER_ITEM_SERVICE_DB_TYPE;

let orderItemService;
if (ORDER_ITEM_SERVICE_DB_TYPE === 'mongodb') {
//   orderItemService = require('./mongodb/orderItemService');
} else if (ORDER_ITEM_SERVICE_DB_TYPE === 'sqlite') {
    orderItemService = require('./sqlite/orderItemService');

}
module.exports = orderItemService;