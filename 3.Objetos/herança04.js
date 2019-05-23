function MeuObjeto(){

}

console.log(MeuObjeto.prototype)

const Obj1 = new MeuObjeto
const Obj2 = new MeuObjeto

console.log(Obj1.__proto__ === Obj2.__proto__)
console.log(MeuObjeto.prototype === Obj1.__proto__)
console.log(Obj1.__proto__)

MeuObjeto.prototype.nome = "Antônio"
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é ${this.nome}!`) // Precisa do this no this.nome
}

MeuObjeto.prototype.falar()
console.log(`O Obj1 tem ${console.log(Obj1)} definidos`)
Obj1.falar() //O Objeto 1 não tem nada definido nele

Obj2.nome = 'Rafael'
Obj2.falar()

const Obje3 = {}
Obje3.__proto__ = MeuObjeto.prototype
Obje3.nome = 'José'
Obje3.falar()


//Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //não é undefined, é nulo