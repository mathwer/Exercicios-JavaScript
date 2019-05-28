const sequence = {
    _id : 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id ) produto.id = sequence.id  //Inserir um ID, caso o produto não tenha
    produtos[produto.id] = produto   //Caso tenha um ID, retornar produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports= {salvarProduto, getProduto, getProdutos, excluirProdutos}  //Torna essas funções visíveis fora desse módulo. Mas o sequence continua sendo algo interno apenas