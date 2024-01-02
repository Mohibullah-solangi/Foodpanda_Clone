const express = require("express");
const vendorLogin = express.Router();
const Restaurants = require("../models/Restaurants");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()

vendorLogin.route("/Restaurant/login")
.post(async (req, res) => {


  try {

    // Find user from DB
    const exist = await Restaurants.findOne({ email: req.body.email });
    console.log(exist);

    // User Not Exist Condition
    if (!exist) {
      res.status(401).json({ Error: `Incorrect email or Password.` });
    } else {

        // User Exist Condition
      const Hashedpassword = exist.password;
      console.log(Hashedpassword);

    //   Password Checking 
      try {
        const password = await bcrypt.compare(
          req.body.password,
          Hashedpassword
        );
        console.log(password);
        if (password == true) {
                const accessToken = jwt.sign({"email" : exist.email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1 day"})
                console.log(accessToken)
                const currentUser = {...exist._doc, token: accessToken}
                console.log(currentUser)
                const updatedUser = await Restaurants.findByIdAndUpdate({_id: exist._id}, currentUser, {
                    new: true,
                  });
                  const Updateduser = await updatedUser.save();
                  console.log(Updateduser)
                  res.cookie('jwt', accessToken, {httpOnly: true, maxAge: 24*60*60*1000, sameSite: "none", secure: true})
          res.status(200).json({ Success: `Successfully Login.` });
        } else {
          res.status(401).json({ Error: `Incorrect email or Password.` });
        }
      } 
      
      catch (error) {
        console.log(error)
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = vendorLogin;
