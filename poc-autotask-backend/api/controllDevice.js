const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
// var five = require("johnny-five");
// var board = new five.Board();

module.exports = app => {
    const toggleLed = async (req, res) => {
        res.json({
            callFrom: req.body.callFrom,
            isLedOn: req.body.isLedOn || false
        })

        // board.on("ready", function () {

        //     var led = new five.Led(8);
        
        //     this.repl.inject({
        //         led: led
        //     })

        //     led.on()
        // })
    }

    return { toggleLed }
}