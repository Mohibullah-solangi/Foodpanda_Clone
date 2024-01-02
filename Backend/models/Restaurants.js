const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
  Owner_Fname: {
    type: String,
    // required: true,
  },
  Owner_Lname: {
    type: String,
    // required: true,
  },

  RestaurantName: {
    type: String,
    // required: true,
    unique: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    // required: [true, "Email required"],
  },
  MobileNo: {
    type: String,
    // required: true,
    default: "333388888",
  },
  password: {
    type: String,
    // required: true,
    default: "12345",
  },
  rating: {
    type: Number,
    default: 5,
  },
  Category: {
    type: String,
    enum: ["Fast Food", "Desi", "Desert", "Beverages"],
    default: "Fast Food",
  },
  BannerImage: {
    type: String,
    default: "http://127.0.0.1:3500/images/Rdefault.png",
  },
  token: {
    type: String
},


  Dishes: { type : Array , default : [] }
  
});

const Restaurants = new mongoose.model("Restaurant", restaurantsSchema);

module.exports = Restaurants;
