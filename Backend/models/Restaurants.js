const mongoose = require("mongoose");


const restaurantsSchema = new mongoose.Schema({
    RestaurantName: {
        type: String,
        // required: true,
     
        default: "Home Kitchen"
    },
    password: {
        type: Number,
        // required: true,
        default: 12345
    },
    Dishes: 
    
        [
        {
            Image: {
                type: String,
               default: "image"
            },
            Title:{
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
                enum: ['fastfood', 'desi', 'desert', 'beverages'],
                default: 'fastfood'
                    
                 }
 } ]
                
    

})

const Restaurants = new mongoose.model("User", restaurantsSchema)

module.exports = Restaurants