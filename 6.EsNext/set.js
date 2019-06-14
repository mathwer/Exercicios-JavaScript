//Estrutura não indexada (como arrays) e não aceita repetição 
const times = new Set()

times.add('Vasco')
times.add('Palmeiras').add('São Paulo').add('Fluminense').add('Flamengo')
times.add('Vasco')
times.add('Vasco')

console.log(times)  //Mesmo falando pra adicionar o 'Vasco' várias vezes, ele só adiciona uma única vez 

console.log(times.size)
console.log(times.has('Vasco'), times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Ana', 'Matheus', 'Lucas'] //Array de nomes
const nomeSet = new Set(nomes)  //Transformando o array em Set
console.log(nomeSet)