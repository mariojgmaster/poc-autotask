const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).send('Meu Baackend!')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})