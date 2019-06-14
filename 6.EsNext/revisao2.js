//Arrow Function
const soma = (a,b) => a+b  //Funções de uma única linha, chama implicitamente o return, caso não tenha o corpo
console.log(soma(2,3)) //Como são funções anônimas, só é possível chamá-las caso estejam guardadas em uma variável

//Arrow Function (this) -> this numa arrow está ligado ao contexto onde foi escrita

const lexico1 = () => console.log(this === exports) //Não vai apontar para global
const lexico2 = lexico1.bind({}) //Mesmo tentando forçar a barra, o lexico1 vai apontar para o module.exports
lexico1()
lexico2()

//Parâmetro default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log(null)
log('Sou mais forte que o valor padrão') //O valor dito na função é um valor padrão, mas se explicitar uma nova variável, essa nova será mais 'forte'

//Operador rest (agrupar) ou spread(espalhar) (spread é mais usado com array)
function total(...numeros){
    let total = 0 
    numeros.forEach( n => total += n)
    return total
}
console.log(total(2,3,4,5,6))
 