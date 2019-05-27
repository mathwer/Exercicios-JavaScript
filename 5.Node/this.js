console.log(this === global)
console.log(this === module)
console.log(this === module.exports)        
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //Ou seja, se colocar o this como algo dentro de uma função, ele irá para o escopo global.
}

logThis() //Dentro de uma função, o this não aponta para module.exports, apenas fora dela 