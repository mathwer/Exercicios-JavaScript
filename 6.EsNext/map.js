//É um padrão de chave-valor que parece muito com o objeto, apesar de não conseguir substituí-lo

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular',{framework: true})

console.log(tecnologias.react) //Não funciona para o Map, apenas para object
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map ([
    [function () {}, 'Função'],
    [{}, 'objeto'],
    [123, 'número'],

])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //Lembra o método lenght

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //nesse caso, vai ficar somente o B, pois não podem existir chaves variadas.
chavesVariadas.set(456, 'a')
console.log(chavesVariadas)