//Object.create

const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai) //criar um objeto filha cujo prototype é pai
filha1.nome = 'Ana'
console.log(filha1)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {nome: { // colchetes pq tudo o que estiver dentro vai valer para a característica nome 
     value: 'Bia', writable: false, enumerable: true
}})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // mesmo não tendo definido o corCabelo para filha 2, ele entende que é para pegar do objeto pai

console.log(Object.keys(filha1))
console.log(Object.keys(filha2)) //se o enumerable estivesse falso, no console.log não apareceria nenhum atributo nessa função.

for (let key in filha2){
    filha2.hasOwnProperty(key) ?  //essa interrogação trabalho com 2 opções, uma retornando verdadeiro e outra falso. 
    console.log (key) : console.log(`por herança : ${key}`)  // a primeira parte é caso retorne verdadeiro e após o :, é o que retorna falso
}