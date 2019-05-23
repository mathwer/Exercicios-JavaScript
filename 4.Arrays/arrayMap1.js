// transforma os dados de um array pra ficar no final com a mesma quantidade de elementos
// É um for com um propósito

const nums= [1, 2, 3, 4,5]  //se declarar o array com let, é possível fazer um map para ele mesmo

let resultado = nums.map(function(e){
    return e * 2    
})

console.log(resultado, nums) //mostrando que o array gerado não altera o array antigo, que se mantém igual 

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro =  e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

