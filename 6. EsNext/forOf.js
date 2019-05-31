//Mais um laço for, o forIn vai em cima de íncides, e o forOf é sobre valores
//Pode ser usado não só em array, mas em string e outros

for (let letra of 'Podolmos'){  //Para cada letra dentro da string, ele vai retornar a letra
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma){    //Retorna o índice de cada coisa ele retorna o indice
    console.log(i)  
}

for (let assunto of assuntosEcma){    //Retorna cada elemento do array 
    console.log(assunto)
}

const assuntosMap = new Map ([
    ['Map', {abordado: true}],
    ['Set', {abordado:true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
     console.log(chave)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s ){
    console.log(letra)
}