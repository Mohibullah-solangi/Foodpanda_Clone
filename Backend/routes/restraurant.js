const express = require("express");
const restaurant = express.Router();
const Restaurants = require("../models/Restaurants");
const bcrypt = require('bcrypt');
const multer = require("multer");
const VerifyJWT = require("../middleware/jwtAuth")

// storaging image file using multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });



// Routes for restaurants



restaurant.get("/Restaurant", async (req, res) => {
 
  try {
    const ResMenu = await Restaurants.find({}, {password:0});

    if (!ResMenu) {
      return res.status(404).send();
    } else {
      res.status(200).send(ResMenu);
      console.log(ResMenu);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});


restaurant.get("/Restaurant/:email", VerifyJWT, async (req, res) => {
  console.log("single restuarant get request for Dashboard");

  try {
    const exist = await Restaurants.findOne({ email: decoded.email }, );
    console.log(exist);

    if(!exist) return res.sendStatus(403)   //forbidden

    else return res.status(200).send(exist)
    
} 
catch (error) {
    res.status(401).send(error)
}
});


// Posting new Restuarant into mongo server

restaurant.post("/Restaurant", upload.single("Image"), async (req, res) => {
  console.log("POST Request");
  console.log(req.body);
 
  try {

    //  Checking if restuarant already exist in the data base or not
    const RestExist = await Restaurants.find({ RestaurantName: req.body.RestaurantName}, {password:0});
           console.log(RestExist)
    // Create new Document for each restuarant
    if (RestExist.length == 0) {

      const {Owner_Fname, Owner_Lname, RestaurantName, email, MobileNo, password, Category} = req.body

      // Hashing password before stroring to DB
      try {
        const Hashpassword = await bcrypt.hash(password, 10)
        
        // Storing Restuarant in DB after Hashing
      const RestCreated = await new Restaurants({
        Owner_Fname: Owner_Fname,
        Owner_Lname: Owner_Lname,
        RestaurantName: RestaurantName,
        email: email,
        MobileNo: MobileNo,
        password: Hashpassword,
        Category: Category

      });
      console.log(RestCreated)
      const restcreated = await RestCreated.save();
      res.status(201).json({'Success':`Congratulations ${restcreated.Owner_Fname}! Your Restuarant is Successfully Registered.`});
      } 
      catch (error) {
        console.log(error)
      }

    }

    // Resturant Name already Exist
    else{
      
      res.status(409).json({'Error':'Restuarant name is already taken. Try different name'});
      
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

restaurant.patch("/Restaurant/:RestaurantName", async (req, res) => {
  console.log("router patch path");

  try {
    const _id = req.params.id;
    console.log(_id);
    const UpdateMenu = await Restaurants.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(req.body);

    res.status(200).send(UpdateMenu);
    console.log(UpdateMenu);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

restaurant.put("/Restaurant/:RestaurantName", async (req, res) => {
  console.log("router put path");

  try {
    const _id = req.params.id;
    const UpdateMenu = await Restaurants.findByIdAndReplace(_id, req.body, {
      new: true,
    });

    res.status(200).send(UpdateMenu);
    console.log(UpdateMenu);
  } catch (e) {
    res.status(400).send(e);
  }
});

restaurant.delete("/Restaurant/:RestaurantName", async (req, res) => {
  console.log("router post path");

  try {
    const ResMenu = await Restaurants.find();

    if (!ResMenu) {
      return res.status(404).send();
    } else {
      res.status(201).send(ResMenu);
      console.log(ResMenu);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = restaurant;
