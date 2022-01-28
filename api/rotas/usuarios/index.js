const roteador = require('express').Router()

roteador.use('/', (requerimento, resposta) => {
    resposta.send('ok_rotas_usuarios_index-js')
})

module.exports = roteador