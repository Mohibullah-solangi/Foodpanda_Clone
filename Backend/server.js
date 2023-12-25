require("dotenv").config()
const express = require("express");
const app = express();
const db = require("./config/dbConn")
const mongoose = require("mongoose")
const path = require("path")
const PORT = process.env.PORT || 3500;
const restraurant = require("./routes/restraurant")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const { logger} = require('./middleware/logEvent')


// connecting mongoDB server
db()

// Collecting data logs
app.use(logger)

// Cross Origin Resource Sharing 
app.use(cors(corsOptions))

// Data parsing
app.use(express.json())

// Routes for Endpoints
app.use(restraurant)


// Static file servings
app.use("/images", express.static(path.join(__dirname, "./images")))
app.use("/", express.static(path.join(__dirname, "./views")))

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