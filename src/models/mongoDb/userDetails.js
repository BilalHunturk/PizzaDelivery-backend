const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    userId: Number,
    name: String,
    surname: String,
    email: String,
    phone:String
});

const UserDetails = mongoose.model('Userdetails', userDetailsSchema);

module.exports = UserDetails;