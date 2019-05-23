//Cadeia de protótipo (prototype chain)


const avo = {attr1: 'A'}

const pai = {__proto__ : avo,
    attr2 : 'B',
    attr3 : '3' // shadowing nessa variável, quando chamando pelo filho
}
const filho = {
    __proto__ : pai,
    attr3: 'C'
}

console.log(filho.attr3, filho.attr2, filho.attr1)
console.log(pai.attr0, pai.attr3, pai.attr1)

Object.prototype.attr0 = 'Z' //evitar fazer, pois é algo lento e que afeta a estrutura de todos os objetos 
console.log (avo.attr1, avo.attr0, avo.attr2)
console.log(filho.attr0)

const carro = {
    velAtual : 0, 
    velMaxima : 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMaxima){
            this.velAtual +=  delta
        }
        else{
            this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMaxima} km/h`
    }
}

const ferrari = {
    modelo : 'f40',
    velMaxima: 340, //shadowing, sombreando a velocidade de escopo mais abrangente

}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
        }

}

Object.setPrototypeOf(ferrari, carro) //ferrari tem como protótipo carro
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)
console.log(volvo.velMaxima)
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status()) //quando executar o comando, o this dentro da função status vai se referir ao objeto ferrari, e não ao objeto carro