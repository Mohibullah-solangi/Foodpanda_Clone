require("dotenv").config()
const mongoose = require("mongoose");

const db = async()=>{
    try{
         await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
          } )
    }
    catch(err){
          console.log(err)
    }
} 


module.exports = db