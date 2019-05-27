console.log(module.exports) //começa como um objeto vazio
console.log(module.exports === this) //true, pois o this vai referenciar o module.exports
console.log(module.exports === exports)


//Essas três formas farão as variáveis declaradas ficarem visíveis fora desse arquivo
this.a = 1 
exports.b = 2
module.exports.c = 3

exports = null

console.log(module.exports) //o null não altera nesse caso
console.log(exports)

module.exports = {publico: true}