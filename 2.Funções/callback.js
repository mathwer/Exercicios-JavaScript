const notas = [7.7, 6.5, 8.5,9.0, 6.2, 2.3, 4.6]

// Sem callback

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com notas baixas

notasBaixas = notas.filter(function(nota){
   return  nota >= 7
})
console.log (notasBaixas)

notasBaixas = notas.filter(nota => nota <= 7)

console.log (notasBaixas)