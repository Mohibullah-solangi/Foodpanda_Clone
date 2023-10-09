const express = require("express")
const router = express.Router();

router.get("/1", (req, res)=>{
    console.log("router get path")
    res.send("router running")
})

router.post("/1", (req, res)=>{
    console.log("router get path")
})

router.patch("/1", (req, res)=>{
    console.log("router get path")
})

router.delete("/1", (req, res)=>{
    console.log("router get path")
})

router.put("/1", (req, res)=>{
    console.log("router get path")
})

module.exports = router