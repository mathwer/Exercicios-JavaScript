function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const Aula1 = new Aula( 'Bem vindo', 123)
const Aula2 = new Aula('Até mais', 456)
console.log(Aula1, Aula2)

// Operador new => novo objeto e prototype aponta para aula 

//simulando o que acontece na função new 
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype 
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Funções ', 677 )
const aula4 = novo (Aula, 'Objetos', 621)
console.log(aula3, aula4)