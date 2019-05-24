
//Dado um array e um número, mostrar em um novo array quais os números que são divisíveis pelo lado de fora
//Exemplo: divisibleBy([2, 3, 4, 7, 8 ], 2 ) vai gerar um array com os números divisíveis por 2, no caso [2, 4, 8]

function divisibleBy(numbers, divisor){
 
    let arr = numbers.filter(x => x%divisor === 0)
    return arr  
}



console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2) )

//Ele retornar o valor correto, porém também retorna undefined se colocar console.log(arr)