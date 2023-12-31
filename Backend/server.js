require("dotenv").config()
const express = require("express");
const app = express();
const db = require("./config/dbConn")
const mongoose = require("mongoose")
const path = require("path")
const PORT = process.env.PORT || 3500;
const restaurant = require("./routes/restraurant")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const { logger} = require('./middleware/logEvent')
const vendorLogin = require("./routes/vendorLogin")
const cookieParser = require("cookie-parser")
const credentials = require("./middleware/credentials")


// connecting mongoDB server
db()

// Collecting data logs
app.use(logger)



// Static file servings
app.use("/images", express.static(path.join(__dirname, "./images")))
app.use("/", express.static(path.join(__dirname, "./views")))


// Handle credential before cors
app.use(credentials)

// Cross Origin Resource Sharing 
app.use(cors(corsOptions))

app.use(cookieParser())

// Data parsing
app.use(express.json())





// Routes for Endpoints

app.use(vendorLogin)
app.use(restaurant)

// Handling Error for incorrect path
app.all("*", (req, res)=>{
    
    res.status(404).sendFile(path.join(__dirname, "./views", "404.html"));

})



// Mongoose connect checking
mongoose.connection.once("open", ()=>{

    console.log("connected mongoose")
    app.listen(PORT, ()=>{
        console.log(`Express app running at ${PORT}`);
    })
})

mongoose.connection.on("error", (err)=>{
    console.log(err)
})