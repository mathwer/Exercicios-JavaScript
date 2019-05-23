// array é um tipo especial de objeto para javascript, tem seus métodos, mas não é um array ARRAY XD 
// apesar disso, não tem muita diferença das outras linguagems em questão de uso e manipulação


console.log (typeof Array, typeof new Array, typeof [])
//Os arrais crescem e diminuem dinamicamente em Js, e aceitam uma grande quantidade de dados diferentes, como objetos, string, outros arrays, mas é recomendado trabalhar sempre com dados do mesmo tipo
let aprovados = new Array ('Bia', 'Carlos', 'José')
console.log(aprovados)

aprovados = ['José', 'Bia', 'Carlos']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[4]) //retorna undefined e não retorna erro 

aprovados[3] = 'Paulo' // comum para substituir um elemento que já existe 
aprovados.push('Ana') //mais comum para adicionar no próximo índice 
console.log(aprovados.length)
aprovados[6] = 'Maria' //o item [5] não está definido, logo, quando aparecer o console.log, ele irá mostrar um item vazio 
console.log(aprovados)
console.log(aprovados[5], aprovados[6])
console.log(aprovados.length) //retorna 7, apesar de ter um item não definido, diferente de nulo 

aprovados[900] = 'Vinícius'
console.log(aprovados)
console.log(aprovados.length)
aprovados.sort() //vai ordenar retirando os valores undefined e jogando-os pro final
console.log(aprovados)
delete aprovados[3] //apenas coloca undefined na posição, e não reordena
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) //primeiro fator diz a partir de qual elemento você quer trabalhar e o segundo diz quantos elementos a partir desses serão excluídos
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1 ', 'Elemento2') //Aqui ele vai excluir apenas o item na posição 1 e nessa posição vai colocar os items especificados
console.log(aprovados)
console.log(aprovados[2])
console.log(aprovados[3]) //Ana foi para o índice 3, pois foram introduzidos 2 elementos na posição 1
