//criar uma função filter no prototype

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this) == true){
            newArray.push(this[i])
        }
    }

    return newArray
}



const produtos = [
    { nome: 'Notebook', preco: 3800, fragil: true},
    { nome: 'Copo de Vidro', preco: 10.99, fragil: true},
    { nome: 'Guitarra', preco: 2000, fragil: false},
    { nome: 'Ipad Pro', preco: 2300, fragil: true},
    { nome: 'Copo de plástico', preco: 7.99, fragil: false}
]

console.log(produtos.filter2(function(p){

    return p.preco >= 2000 

}))