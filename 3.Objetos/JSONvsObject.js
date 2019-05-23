//JSON = javascript object notation
// formado de dados, usado para interoperabilidade sobre sistemas, não carrega nada consigo sobre o sistema
//Consegue ler em qualquer linguagem, por ser um arquivo de texto


const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}

console.log(JSON.stringify(obj))  //transforma um objeto em string
// ele vai excluir a função da soma, pois ele só transforma dados e não métodos.

// console.log(JSON.parse("{d: 4, e: 5, f:6}")) => essa linha dará um erro

//console.log(JSON.parse("{'d': 4, 'e': 5, 'f':6}")) => também não funciona, pois tem que estar em aspas duplas.

console.log(JSON.parse('{"d": 4, "e": 5, "f":6}')) //agora funciona, lembrando de abri no início com aspas simples

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []} '))

//JSON validator, pode jogar algo lá para ver se é um JSON válido