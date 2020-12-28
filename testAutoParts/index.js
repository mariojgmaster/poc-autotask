const express = require('express')
const app = express()
var five = require("johnny-five")
var board = new five.Board()

const PORT = 3000

// let goThere = () => {
    // board.on("ready", () => {
        // var led = new five.Led(8)
        // this.repl.inject({
        //     led: led
        // })
        // console.log('led.on()')
        // led.on()
    //   });
// }

app.get('/', (req, res) => {
    res.send('oi')
})

app.get('/device', (req, res) => {
    res.send()
    var led = new five.Led(8)
    if(req.query.ligar == 1) {
        led.on()
    } else if(req.query.ligar == 0) {
        led.off()
    }
})

app.listen(PORT, () => {
    console.log(`Backend executando na porta ${PORT}...`)
})