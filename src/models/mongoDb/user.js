const mongoose = require('mongoose');
const passwordHelper = require('../../middleware/helper/passwordHelper')
require('dotenv').config();

const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    role: String
});

userSchema.pre('save',async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    try {
        // Hash the password with the defined salt rounds
        this.password = await passwordHelper.hashPasword(this.password);
        next();
    } catch (err) {
        return next(err);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;