const jwt = require("jsonwebtoken");
require("dotenv").config();
const Restaurants = require("../models/Restaurants");

const accessTokencontroller = async(req, res, next)=>{

    const cookies = req.cookies
    console.log(cookies)

    if(!cookies?.jwt) return res.status(401).send() //unauthorized
     console.log(cookies.jwt)

     const accessToken = cookies.jwt
     const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
     console.log(decoded)
     if(!decoded) return res.sendStatus(403)   //forbidden

next()
}

module.exports = accessTokencontroller