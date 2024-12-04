require('dotenv').config();
const USER_DETAILS__SERVICE_DB_TYPE = process.env.USER_DETAILS__SERVICE_DB_TYPE;

let userDetailsTypeService;

if (USER_DETAILS__SERVICE_DB_TYPE === 'mongodb') {
  userDetailsTypeService = require('./mongodb/userDetailsService');
} else if (USER_DETAILS__SERVICE_DB_TYPE === 'sqlite') {
  userDetailsTypeService = require('./sqlite/userDetailsService');
}
module.exports = userDetailsTypeService;