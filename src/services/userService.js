require('dotenv').config();
const USER_SERVICE_DB_TYPE = process.env.USER_SERVICE_DB_TYPE;

let userService;

if (USER_SERVICE_DB_TYPE === 'mongodb') {
    userService = require('./mongodb/userService');
} else if (USER_SERVICE_DB_TYPE === 'sqlite') {
    userService = require('./sqlite/userService');
}
module.exports = userService;