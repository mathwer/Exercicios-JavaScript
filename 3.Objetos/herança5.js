console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Se todos são funções, todos tem um prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

// esse reverse não é um método que está na API, mas como foi adicionado no prototype de String, pode ser chamado para qualquer string

console.log('Eita Carambolas'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 3, 5, 6, 2, 3, 7].first())
console.log(['a', 'b', 'c'].first())


String.prototype.toString = function (){  //Isso está modificando uma função que já existe, pode causar algo catastrófico, pois irá mexer com todas as funções que usariam isso.
    return 'Lascou tudo'
}

console.log('É noix, Queiroz'.reverse())