// evitar repetição de código, preferível utilizar composição / decorator

const ferrari = {
    modelo: 'f40',
    velMax: 400
}

const volvo = {
    modelo: 'v40',
    velMax: 300
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === Object.prototype)

function Objeto(){}

console.log(Objeto.__proto__)
console.log(Object.prototype, Objeto.prototype)
