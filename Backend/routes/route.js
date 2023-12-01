const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurants");
const multer = require("multer");


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



// Routes for restaurant menu and details

router.get("/AddNewDish", upload.single("Image"), async (req, res) => {
  console.log("router post path");

  try {
    const ResMenu = await Restaurants.find({ RestaurantName: 'Home Kitchen'}, {password:0});

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



// Posting new Dishes into mongo server

router.post("/AddNewDish", upload.single("Image"), async (req, res) => {
  console.log("router post path");
  console.log(req.body);
  console.log("initial");

  const imageeName = req.file.filename;
  req.body.Image = `http://127.0.0.1:3500/images/${imageeName}`;
  console.log("Final");
  console.log(req.body);
  console.log(req.params.id)
  try {

    // Create new Document for each restruarant
    if (req.params.id) {
      const Menu = new Restaurants({
        Dishes: req.body
      });
      const NewMenu = await Menu.save();
      res.status(201).send(NewMenu);
      console.log(NewMenu);
    }

    // Append Dishes to existing Document in the database for a restraurant
    else{
      
      const Name = "Home Kitchen"
      console.log("Else Hello")
      const UpdateMenu = await Restaurants.updateOne({RestaurantName: Name}, {
        $push: {Dishes: req.body}});
        const NewMenu = await UpdateMenu.save();
      console.log(req.body);
  
      res.status(200).send(NewMenu);
      
      console.log(NewMenu);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/AddNewDish/:id", async (req, res) => {
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

router.put("/AddNewDish/:id", async (req, res) => {
  console.log("router put path");

  try {
    const _id = req.params.id;
    const UpdateMenu = await Restaurants.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    res.status(200).send(UpdateMenu);
    console.log(UpdateMenu);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/AddNewDish", async (req, res) => {
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

module.exports = router;
