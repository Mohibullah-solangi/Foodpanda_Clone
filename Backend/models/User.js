const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },

})

module.exports = new mongoose.model("User", UserSchema)