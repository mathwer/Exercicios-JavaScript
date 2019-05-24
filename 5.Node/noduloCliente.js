//Quando o arquivo terminar com o nome cliente, ele estará recebendo outros nódulos.

const noduloA = require('./noduloA')  // o ./ é utilizado para indicar que o arquivo está na mesma pasta.
const noduloB = require('./noduloB') //Não precisa colocar a extensão, mas somente caso o arquivo seja um arquivo de javascript.

//O que foi exportado em cada função está em cada objeto.

console.log(noduloA.bemvindo)
console.log(noduloA.ateLogo)
console.log(noduloA.ola)
console.log(noduloA) //imprimir todos os elementos que estão no nódulo, retornando como um objeto, mesmo não tendo pedido pra criar um objeto.  


console.log(noduloB.bomDia) //só reconhece pois foi utilizado o module.exports no arquivo do noduloB. Se utilizasse só exports, não retornaria de forma certa.
console.log(noduloB.boaNoite())
console.log(noduloB)