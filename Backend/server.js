require("dotenv").config()
const express = require("express");
const app = express();
const db = require("./config/dbConn")
const mongoose = require("mongoose")
const path = require("path")
const PORT = process.env.PORT || 3500;
const router = require("./routes/route")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")


// app.get("/", (req, res)=>{
//     res.send("Welcome to backend")
// })
db()
app.use(cors(corsOptions))
app.use(express.json())
app.use(router)

app.use("/images", express.static(path.join(__dirname, "./images")))
app.use("/", express.static(path.join(__dirname, "./views")))


app.all("*", (req, res)=>{
    
    res.status(404).sendFile(path.join(__dirname, "./views", "404.html"));

})




mongoose.connection.once("open", ()=>{

    console.log("connected mongoose")
    app.listen(PORT, ()=>{
        console.log(`Express app running at ${PORT}`);
    })
})

mongoose.connection.on("error", (err)=>{
    console.log(err)
})