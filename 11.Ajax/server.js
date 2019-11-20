const bodyParser = require('body-parser') 
const express = require('express')
const app = express()

app.use(express.static('.')) //Provê os arquivos estáticos, ou seja, os html, js e css
app.use(bodyParser.urlencoded({ extended: true  }))
app.use(bodyParser.json()) //Transforma json

app.get('/teste', (req, res) => res.send('OK')) //Função chaamda quando o /teste for chamado a partir de uma função get

const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req, file, callback){
        callback(null, './upload') //Armazena o arquivo na pasta upload. Se fosse colocar na pasta atual, seria só '.' .
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`) //Vai colocar o nome orignal, mas com a data atual na frente
    }
})

const upload = multer({storage}).single('arquivo') //Vai receber um upload de arquivo e será colocado segundo as regras no storage. 

app.post('/upload', (req, res) =>{ //Utilizando o método post para enviar o arquivo
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro.')  //Caso ocorra um erro, ele já chama a mensagem de erro, e termina a função. 
        }
        res.end('Concluído com sucesso!')
    })
})

app.post('/formulario', (req,res) => {
    res.send({
        ...req.body,
        id: 1 
    })
})

app.get('/parOuImpar', (req, res)=>{
    //req.body
    //req.query
    //req.params <- mais interessante que o params
    const par = parseInt(req.query.numero)% 2 === 0 
    res.send({
        resultado : par ?  'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))