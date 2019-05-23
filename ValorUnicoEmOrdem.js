//Dado um array ou string com vários itens repetidos, colocar apenas o primeiro de cada, sendo cada um um elemento diferente
//Exemplo [AAAAAaaaaavvvvXXXCCCCC] >>>>> [A, a, v, X, C]

var uniqueInOrder=function(iterable){
    let str = iterable
    if(typeof str === Array){
       str.join('')
        return str
    }
    let arrFinal = str.split('').filter(function(e,i){   //Isso aqui funcionou mais ou menos. Só retorna o primeiro elemento 
        return e[i] !== e[i+1] 
         
})   //Isso funciona quando é string

    

    

   console.log(arrFinal)
}
console.log(uniqueInOrder('AAAAAVVVXXXXSSSSS'))

console.log(uniqueInOrder(['B','A','A','A', 'A', 'A', 'A', 'b','b', 'b','b']))
