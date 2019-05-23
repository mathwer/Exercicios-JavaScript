// percorre os elementos do array para realizar uma ação
// não é o único que faz isso, exite o filter e o map também

const Aprovados = ['Ana', 'Carol', 'Daniel', 'Marcos']

Aprovados.forEach(function(nome, indice){
    console.log (`${indice+1}) ${nome}`)
})


Aprovados.forEach(nome => console.log(nome))

const imprimirAprovados = aprovado => console.log(aprovado)

Aprovados.forEach(imprimirAprovados)
