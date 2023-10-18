const mongoose = require("mongoose");


const restaurantsSchema = new mongoose.Schema({
    RestaurantName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true
    },
    Dishes: [
        {
            Title:{
                type: String,
                required: true,
                unique: true
            },
            Description: {
                type: String,
                required: true
            },
            Price: {
                type: Number,
                required: true
            },
            Image: {
                type: Buffer,
                required: true
            },
            Category: {
                enum: {
                    values: ['fastfood', 'desi', 'desert', 'beverages'],
                    message: '{VALUE} is not supported'
                  },
                  lowercase: true
            }
        }
    ]

})

const Restaurants = new mongoose.model("User", restaurantsSchema)

module.exports = Restaurants