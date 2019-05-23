const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] //como o array é uma const, não é possível alterar os elementos dele

pilotos.pop() //remove o último elemento do array
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
 console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no primeiro elemento
console.log(pilotos)

//Splice adiciona e remove elementos a partir de uma posição

pilotos.splice(2, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(2, 1) //retira um elemento a partir do elemento de índice 2 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //criando um novo array a partir do elemento de índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //adiciona até o elemento de índice 4, sem adicionar o de índice 4 
console.log(algunsPilotos2)

