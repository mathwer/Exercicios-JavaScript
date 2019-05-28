const porta = 3003  //A porta é uma forma de selecionar qual processo vai atender a requisição. Por isso que ao abrir o mesmo aplicativo na mesma porta, na segunda vez dá problema

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))    //Para qualquer requisição será utilizado essa expressão middleware e sé tiver esse padrão urlencoded, ele irá aplicar esse middleware

app.get('/produtos',(req, res, next) => { //requisição, resposta, next 
    console.log('Middleware1...') //Esse vai ser impresso apenas no terminal, e não na postman
    next()
    })

app.get('/produtos',(req, res, next) => { //requisição, resposta, next 
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => { //os ':' indica que é um parâmetro, que será chamado na funcção abaixo 
    res.send(bancoDeDados.getProduto(req.param.id))
})

app.post('/produtos',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,            //Req é usado para pegar informações de um comando de post 
        preco: req.body.preco
    })
    res.send(produto) //Será gerado um JSON para 
})

app.put('/produtos:id',(req, res, next) => {    //Esse código irá substituir um arquivo caso o ID seja o mesmo de um já escrito antes, utilizando o put ao invés de post
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id, 
        nome: req.body.nome,            
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos:id', (req, res, next)=>{ //por algum motivo o   delete não está funcionando ainda 
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
}) 

//Depois disso, tem que alterar os arquivos do package.JSON, como o main e adicionar o nomdemon como start
//Rodar então o nodemon, usando o comando npm start no terminal
//Usar o PostMan para interagir com o arquivo, pedindo para entrar no http://localhost:3003/produtos, usando o comando GET
//Para utilizar outros comandos, como o POST, é nessesário trocar na linha 10

//Caso seja reiniciado o servidor, todos os dados colocados anteriormente serão finalizados, voltando a colocar o primeiro produto como ID: 1 
