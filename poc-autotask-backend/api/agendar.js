const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
var five = require("johnny-five");
var board = new five.Board();
const sch = require('node-schedule')

module.exports = app => {
    const scheduleJob = async (req, res) => {
        var led = new five.Led(8);
        
        const someDate = new Date()
        var segundos = someDate.getSeconds()+2
        req.body.schHour != null ? someDate.setHours(req.body.schHour) : null
        req.body.schMinute != null ? someDate.setMinutes(req.body.schMinute) : null
        req.body.schSecond != null ? someDate.setSeconds(req.body.schSecond) : someDate.setSeconds(segundos)
        sch.scheduleJob(someDate, () => {
            led.on()
            res.json({
                callFrom: req.body.callFrom,
                isLedOn: req.body.isLedOn || false,
                schHour: req.body.schHour,
                schMinute: req.body.schMinute,
                schSecond: req.body.schSecond,
                isSch: req.body.isSch
            })
        })

        // req.body.isLedOn ? led.on() : led.off()
    }

    return { scheduleJob }
}