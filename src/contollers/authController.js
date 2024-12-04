const UserService = require('../services/userService');
require('dotenv').config({path:'../../.env'});
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JwtHelper = require('../middleware/helper/jwtHelper')
const passwordHelper = require('../middleware/helper/passwordHelper')
// const jwtHelper = new JwtHelper();

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const passwordSecretKey = process.env.PASSWORD_SECRET_KEY;

class AuthController {

    static async userRegister(req, res, next) {
        try {
            const {username, phoneNumber, email, password} = req.body;
            const user = await UserService.getUserByUserName(username);
            if (user) return res.status(404).json({ error: 'This username is already in use.' });
            const newUser = await UserService.createUser({username, password,role:'user'}); // needed to be added validation for each credential.
            res.status(201).json(newUser);
            next();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
        next();
    }


    static async login(req, res){
        try {
            // needed to be added validation for each credential.
            const { username, password} = req.body;
            
            const user = await UserService.getUserByUserName(username);
            if (!user) return res.status(400).json({ error: 'Please Check your username or password'});


            const isMatch = await passwordHelper.verifyPassword(password,user.password);
            if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

            // token operations will be held on another specific file.,
            const token = JwtHelper.generateToken(user);
            // const tokentest = JwtHelper.verifyToken(token);
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        } 
    }
}
module.exports = AuthController;