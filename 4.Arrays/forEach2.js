//objetivo é criar uma função forEach para verificar todos os elementos de um array.


Array.prototype.forEach2 = function(callback){   //criando uma função que funcione para qualquer array que seja chamado
    for(let i = 0; i < this.length; i++){       // criando um laço de repetição, de forma que ocorra várias vezes
        callback(this[i], i, this)              // parâmetros para serem observados, o indice i e o próprio array, com o this
    }
}


const Aprovados = ['Ana', 'Carol', 'Daniel', 'Marcos']

Aprovados.forEach2(function(nome, indice){
    console.log (`${indice+1}) ${nome}`)
})


