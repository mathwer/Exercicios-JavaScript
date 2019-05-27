const _ = require('lodash') //não precisa colocar o caminho completo para a pasta, pois o arquivo será buscado diretamente na pasta 

setInterval(() => console.log(_.random(1, 100)), 2000)

// o nodemon muda na mesma hora caso o codigo seja alterado, desde que seja salvo