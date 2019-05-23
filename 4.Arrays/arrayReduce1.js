//usando o reduce pra reduzir um array de números em apenas 1 

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Paula', nota: 9.4, bolsista: true},
    {nome: 'Ricardo', nota: 6.9, bolsista: false}
]

console.log (alunos.map( a => a.nota))
const resultado = alunos.map( a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0/*, 10*/)   //pode passar um valor inicial, em comentário, 10, mas atual, 0. 

console.log(resultado)

