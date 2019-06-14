// let e const, antigamente era usado o var 
//let tem escopo de bloco e os de var, enquanto var era de função ou global
{
var a = 3 
let b = 4
}
console.log(a)
//console.log(b) como foi usado let para definir o b, ele não está no mesmo bloco, então terá que ser levado para dentro das {} onde é definido

//Template String 
const produto = 'iPad'
console.log(`${produto} é 
caro
bagarai!!`) //o template string permite a quebra de linha dentro do código e o uso de variáveis utilizando o ${}

//Destructuring => tirar de dentro de um objeto, array, string

const [l, e, ...tras] = 'Podolmos'
console.log(l, e, tras)

const [x, ,y] = [1 , 2, 3 ]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 35}
console.log(i, nome)