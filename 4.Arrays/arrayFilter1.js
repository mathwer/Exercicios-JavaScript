// outro método de percorrer um array, que pode retirar elementos
 
const produtos = [
    { nome: 'Notebook', preco: 3800, fragil: true},
    { nome: 'Copo de Vidro', preco: 10.99, fragil: true},
    { nome: 'Guitarra', preco: 2000, fragil: false},
    { nome: 'Ipad Pro', preco: 2300, fragil: true},
    { nome: 'Copo de plástico', preco: 7.99, fragil: false}
]

console.log(produtos.filter(function(p){

    return p.preco > 2500 //vai retornar um array onde apenas os elementos que condizem com essa expressão vão estar, no caso, apenas o notebook

}))

console.log(produtos.filter(function(p){

    return p.fragil && p.preco >= 1000 //não precisa colocar que fragil é true, pq o return já volta esse valor no caso de uma variável bool
    
}))