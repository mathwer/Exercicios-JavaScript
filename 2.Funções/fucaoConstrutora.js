function Carro (velocidadeMaxima = 100, delta = 5){
    //atributo privado
    let velocidadeAtual = 0 

    //metodo público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
    
}

const uno = new Carro() //não precisa de parêntesis
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())