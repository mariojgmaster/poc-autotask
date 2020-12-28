const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')
var five = require("johnny-five");
var board = new five.Board();

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

console.log(db)

board.on("ready", function () {

    var led = new five.Led(8);

    this.repl.inject({
        led: led
    })

    led.on()
})

app.listen(3000, () => {
    console.log('Backend executando...')
})