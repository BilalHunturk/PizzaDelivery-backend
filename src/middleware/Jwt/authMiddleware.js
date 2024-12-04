const JwtHelper = require("../helper/jwtHelper");
const UserService = require("../../services/userService");

const authenticateToken = async (req, res, next) => {
  const token = await getToken(req, res); // "Bearer TOKEN"
  if (!token)
    return res
      .status(401)
      .json({ message: "No token provided", result: false }); // No token provided

  const credentials = JwtHelper.verifyToken(token);
  if (!credentials)
    return res
      .status(403)
      .json({
        message: "Invalid or Expired Token, please Login again.",
        result: false,
      });

  try {
    const user = await getUser(credentials.id);
    console.log("User is ", user);
    if (!user) return res.status(404).json("User Not found"); // User not found
    req.user = { id: user.id, username: user.username, role: user.role };
    // console.log(req.user)
    next();
  } catch (error) {
    console.log("smth happened\n", error);
    return false;
  }

  // req.user = user; // Add user data to request object
  // next(); // Continue to the next middleware or route
};

// this function is created to authenticate token and return a result to the user if the token is valid or not.
const tokenCheck = async (req, res) => {
  const token = await getToken(req, res); // "Bearer TOKEN"
  if (!token)
    return res
      .status(401)
      .json({ message: "No token provided", result: false }); // No token provided

  const credentials = JwtHelper.verifyToken(token);
  if (!credentials)
    return res
      .status(403)
      .json({
        message: "Invalid or Expired Token, please Login again.",
        result: false,
      });

  try {
    const user = await getUser(credentials.id);
    if (!user)
      return res
        .status(404)
        .json({
          message: "Invalid or Expired Token, Please Login correctly.",
          result: false,
        }); // User not found

    return res
      .status(200)
      .json({
        message: "Token authenticate was successfully. Your token is valid",
        result: true,
      });
  } catch (error) {
    console.log("smth happened\n", error);
    return false;
  }
};

const getToken = async (req, res) => {
  const authHeader = req.headers["authorization" || "Authorization"];
  return authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN"
};

const getUser = async (id) => {
  return await UserService.getUserById(id);
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // Check if the user's role is one of the allowed roles
    if (!roles.includes(req.user.role)) {
      console.log("Permission Denied.");
      return res
        .status(403)
        .send("Access Denied: You do not have the required role");
    }
    next(); // User has the right role, proceed to the next middleware or route handler
  };
};

const tokenVerify = async (req, res, next) => {};

module.exports = { authenticateToken, tokenCheck, authorizeRoles };
