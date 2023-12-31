const {format} = require('date-fns')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const fsPromise = require('fs').promises
const path = require('path')


const logEvent = async(message, logName) => {
   
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`
    const logitem = `${dateTime}\t${uuidv4()}\t${message}\n`

    try {
        if(!fs.existsSync(path.join(__dirname, '../' ,'logs'))){
            await fsPromise.mkdir(path.join(__dirname, '../' ,'logs'))
        }
        await fsPromise.appendFile(path.join(__dirname, '../', 'logs', logName), logitem)

    } catch (error) {
        console.log(error)
    }

}


const logger = (req, res, next)=>{

    logEvent(`${req.method}\t${req.header.origin}\t${req.url}`, 'reqLog.txt')
    console.log(`${req.method}\t${req.header.origin}\t${req.url}`)
    next()
}
module.exports = {logEvent , logger}