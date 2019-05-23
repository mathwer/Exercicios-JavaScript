const pessoa = {
    nome: 'Rebeca',
    idade: 2, 
    peso: 10,
    
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.defineProperty(pessoa, 'dataDeNascimento',{
    enumerable:true, //não enumera dentro da chave de objeto, logo no console.log(pessoa) ele não apareceria
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataDeNascimento)


const dest = {a : 1}
const o1 = {b : 2}
const o2 = {c: 3, a : 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)
Object.freeze(obj)
obj.c = 1234;
console.log(obj)
console.log(dest)

const carro = {placa : 'abc', ano : 1994, km : 800000}
Object.freeze(carro.ano)
carro.ano = 2000
carro.placa = 'cde'
Object.freeze(carro)
carro.km = 120

console.log(carro)
console.log(typeof(carro))
console.log(typeof(carro.placa))