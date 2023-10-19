const mongoose = require("mongoose");


const restaurantsSchema = new mongoose.Schema({
    RestaurantName: {
        type: String,
        // required: true,
        unique: true,
        default: "Home Kitchen"
    },
    password: {
        type: Number,
        // required: true,
        default: 12345
    },
    Dishes: [
        {
            Image: {
                type: Buffer,
                required: true
            },
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
            
            Category: {
                enum: {
                    values: ['fastfood', 'desi', 'desert', 'beverages'],
                    
                  }
            }
        }
    ]

})

const Restaurants = new mongoose.model("User", restaurantsSchema)

module.exports = Restaurants