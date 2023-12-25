const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
  Owner_Fname: {
    type: String,
    // required: true,

    default: "Home Kitchen",
  },
  Owner_Lname: {
    type: String,
    // required: true,

    default: "Home Kitchen",
  },

  RestaurantName: {
    type: String,
    // required: true,

    default: "Home Kitchen",
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
    required: [true, "Email required"],
  },
  MobileNo: {
    type: Number,
    // required: true,
    default: 333388888,
  },
  password: {
    type: Number,
    // required: true,
    default: 12345,
  },
  rating: {
    type: Number,
    // required: true,
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

  Dishes: [
    {
      Image: {
        type: String,
        
      },
      Title: {
        type: String,
      },
      Description: {
        type: String,
      },
      Price: {
        type: Number,
      },

      Category: {
        type: String,
        enum: ["fastfood", "desi", "desert", "beverages"],
        default: "fastfood",
      },
    },
  ],
});

const Restaurants = new mongoose.model("User", restaurantsSchema);

module.exports = Restaurants;
