//ES8: Object.values/Object.entries
//Pegam valores e chave:valor

const obj = {a:1, b:2, c:3}

console.log(Object.values(obj)) //Funcionava antes como o object.keys
console.log(Object.entries(obj))

//Melhorias na notação literal de objetos 
const nome = "Carla"
const pessoa = {
    nome,
    ola(){  //não precisa colocar olá: function {}
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}

class Cachorro extends Animal {
    falar(){
        return 'Woof Woof!!'
    }
}

console.log( new Cachorro().falar())