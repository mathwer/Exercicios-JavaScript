const express = require('express')
const app = express()
const bodyparser = require('body-parser') //Faz um parser no corpo da requisição e joga os dados no request.body
//Ou seja, quando acessar request.body, é possível conseguir acesso a todos os dados submetidos.

app.use(bodyparser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) =>{
    console.log(req.body) //ver o que chegou
    resp.send('<h1>Parabéns!! Usuário incluído<h1>')
}) 

app.post('/usuarios/:id', (req, resp) =>{
    console.log(req.params.id)
    console.log(req.body) //ver o que chegou
    resp.send('<h1>Parabéns!! Usuário Alterado<h1>')
}) 


app.listen(3003)
