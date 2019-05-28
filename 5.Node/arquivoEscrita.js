const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1245,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Salvo')     //Caso erro seja nulo, ele vai imprimir arquivo salvo
})