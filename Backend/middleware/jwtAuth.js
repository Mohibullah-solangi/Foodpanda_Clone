const jwt = require("jsonwebtoken");
require("dotenv").config();
const accessTokencontroller = require("../controllers/accessTokencontroller")

const VerifyJWT = accessTokencontroller
  
module.exports = VerifyJWT