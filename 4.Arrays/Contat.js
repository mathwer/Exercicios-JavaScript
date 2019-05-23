//concatenar arrays ou dados em um array
const filhas = ['valesca', 'sibalena']
const filhos = ['Uoxingtom', 'Uesclei']

const todos = filhas.concat(filhos, 'Fulano') //a ordem é a que os dados foram ditos. também é possível colocar elementos soltos
console.log(todos, filhas, filhos)

console.log([].concat(['a', 'b'],[1,2], [3,4],5, [[6,7]])) //foi usando um array com um outro array dentro [ [6,7] ]