//Implementando um reduce próprio

Array.prototype.reduce2 = function(callback, valorInicial){ 
    acumulador = this[0]
    if (valorInicial === NaN){              // setando o valor 0, caso o valorInicial não seja um número ou não tenha sido definido. Ele funciona também com bool
        valorInicial = 0 
    }
    for(let i = 1; i< this.length; i++){
        acumulador += this[i]
    }
    return acumulador + valorInicial
    }
const soma = ( total, valor ) => total + valor
const nums = [1,2,3,4,5,6,7]

console.log(nums.reduce2(soma, true))  //o valor inicial é true, ou seja, 1, então a função vai somar em cima desse valor.