const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
//const roteador = require('./rotas/usuarios')
app.use(bodyParser.json())

const roteador = require('./rotas/usuarios')
app.use('/api/usuarios', roteador)

app.listen(config.get('api.porta'), () => console.log('A API está OK!')) 