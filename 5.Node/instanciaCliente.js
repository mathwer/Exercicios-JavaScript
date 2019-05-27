const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')   // retorna um objeto, logo ele sera instanciado assim que for chamado

const contadorC = require('./instanciaNova')()  //retorna uma função factory. Precisa do () para chamar a função, de forma que ela seja executada
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)  //Apesar de ter mudado no valor A, o node fez cache e por isso o valor B também se lembra

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor) //Aqui os valores são diferentes, pois o objeto só é instanciado a partir do momento em que ele é chamado pela variável. 

//É útil, pois o factory permite que crie diversas instâncias a partir do mesmo arquivo, enquanto o objeto fica de forma mais 'global'