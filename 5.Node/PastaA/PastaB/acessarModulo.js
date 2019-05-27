//sair dessa pasta para acessar uma pasta em nível superior

const moduloA = require('../../noduloA') // cada ../ sobe um nível e também. O Linux é case sensitive, windows e Mac não
//é melhor utilizar o caminho relativo para caso seja implementado em outra máquina, não haja problemas 
// prestar atenção nas mensagens de erro, as vezes ocorre um erro de digitação ou do número de pastas a subirem
console.log(moduloA.ola)

//Também pode-se criar módulos dentro do node_modules. Mas é recomendado sempre ignorar o upload dessa pasta para o git, pois pode ficar muito pesado e usar sempre o npm para baixar o módulo novamente.

let saudacao = require('../../../node_modules/saudacao') // pode ser feito dessa forma
saudacao = require('saudacao') //é melhor usar dessa forma, pois será caminhado direto para a pasta node_modules
console.log(saudacao.ola)

const  c = require('./PastaC/index') //também não precisa usar o nome do arquivo e só a pasta, pois ele irá buscar pelo index diretamente
console.log(c.ola2)

/*const http = require('http')        //quando estiver rodando esse código, pode-se entrar em localhost:8080 no browser para que ele seja rodado.
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)   

*/