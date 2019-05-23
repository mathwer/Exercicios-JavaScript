// Factory simples
//Retorna um objeto
function CriarPessoa(){
    return {
        nome:"Ana",
        sobrenome: "Silva"
    }
}

console.log(CriarPessoa())


function CriarProduto(produto, preco){
    return{
        produto,preco,

        'Com descontro é' : preco*0.9
    }
    
}

console.log(CriarProduto('carro', 200000))