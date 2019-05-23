const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

let paraObjeto = json => JSON.parse(json)
let apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)


/*
console.log(novoCarrinho)

let precoTotal = novoCarrinho.map(function (preco){
    return preco
})
console.log(precoTotal)

*/