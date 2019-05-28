const fs = require('fs') //módulo já préinstalado no node

const caminho = __dirname + '/arquivo.json'

//sincrono

const conteudo = fs.readFileSync(caminho, 'utf-8') //o modo de enconde de texto pode ser visto na barra final do visual code, no caso, UTF-8

console.log(conteudo)

//Assíncrono

fs.readFile(caminho, "utf-8",(err, conteudo)=> {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) //Só é possível ver o resultado caso o config seja um objeto. Por isso tem q ser utilizado o JSON.parse()
})

const config = require('./arquivo.json') //como não é um arquivo .js, é necessário colocar a extensão
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{  //vendo os oarquivos do diretório atual. O __dirname é um elemento presente em qualquer arquivo com node
    console.log("Conteúdo da pasta...")
    console.log(arquivos)
})