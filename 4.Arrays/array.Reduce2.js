const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Paula', nota: 9.4, bolsista: true},
    {nome: 'Ricardo', nota: 6.9, bolsista: false}
]

//Desafio 1: Todos os alunos são bolsistas? 

const TodosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador + atual

})
if(TodosBolsistas == alunos.length){
    console.log('Todos são bolsistas')
}
else{
    console.log('Nem todos são bolsistas')
}



//Desafio 2: Algum aluno é bolsista? 

if(TodosBolsistas >= 1){   
    console.log('Algum é bolsista')
}

else{
    console.log('Nenhum é bolsista')
}


/* Essas duas funções observam a quantidade de alunos que possuem bolsa,
pois enquanto bool, true = 1 e false = 0, logo é possível utilizar o reduce para eles.
Caso algum dos casos seja true, o resultado do reduce vai dar um número com a quantidade de trues */

console.log(TodosBolsistas)