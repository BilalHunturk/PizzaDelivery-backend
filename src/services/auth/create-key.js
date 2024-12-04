const jwt = require('jsonwebtoken');
require('dotenv').config({path:'../../../.env'});

const SECRET_KEY = process.env.JWT_SECRET_KEY; // Store securely in env

class JwtHelper {
    static generateToken(user) {
        return jwt.sign(
          { id: user.id, username: user.username },
          SECRET_KEY,
          { expiresIn: '1h' } // Token expiration time
        );
      }
      
      // Verify token validity Check if token is valid. 
      static verifyToken(token){
        try {
          return jwt.verify(token, SECRET_KEY);
        } catch (err) {
          return null;
        }
      };
}
const token = JwtHelper.generateToken({id:99,username:'fasdas44'});
console.log(token);
const result = JwtHelper.verifyToken(token);
console.log(result);
// console.log(SECRET_KEY);

// role based authentication. ==> The system get user role from db with id and then check if it does 
// have an access to that function. 
