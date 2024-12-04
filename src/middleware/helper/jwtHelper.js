// services/jwtService.js
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../../.env' });

const SECRET_KEY = process.env.JWT_SECRET_KEY; // Store securely in env

class JwtHelper {
  static generateToken(user) {
    return jwt.sign(
      { id: user._id ?? user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: '1h' } // Token expiration time
    );
  }

  // Verify token validity
  static verifyToken(token) {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (err) {
      return null;
    }
  };
}
// Generate a token for a user


module.exports = JwtHelper;