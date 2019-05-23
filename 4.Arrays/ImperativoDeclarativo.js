//Diferenças entre as duas abordagens quanto a formar um código

const alunos = [
    {nome: 'João', nota: 7.5},
    {nome: 'Maria', nota: 8.3}
]

//Imperativo

let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log (total1/alunos.length)

//Declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)

//É preferível utilizar o modo declarativo, para que seja possível reutilizar essas funções em locais diferentes e simplificar o código.
//O modo imperativo é melhor ser utilizado para ensinar a fazer de uma forma mais detalhada, ou seja, o que tem q ser feito é mais importante do que a forma que foi feita.