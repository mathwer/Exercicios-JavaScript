const sequencia = {
    _valor: 1, // convenção para variável privada, mas não é obrigatório ou precisa ser respeitado
    get valor() {return this._valor++},
    set valor(valor) { //nesse exemplo o valor só vai pra frente, sem nunca poder voltar
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //essa linha será ignorada pois o valor novo quer ser algo menor do que o que estava gravado
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = "casa"
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia)