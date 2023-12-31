const allowedOrigin = require("./allowedOrigin")


const corsOptions = {
    origin: (origin, callback)=>{
        if(allowedOrigin.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }
        else{
            callback(new Error("Not Allowed by Cors"))
        }
    },
    Credential: true,
    optionsSucessStatus: 200
}

module.exports = corsOptions