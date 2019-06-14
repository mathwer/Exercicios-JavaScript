//Tagged template - Processar o template string dentro de uma função

//Pode ser utilizado para controlar o parse de um template string

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gulherme'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}`)