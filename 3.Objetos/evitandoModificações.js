//Object.preventExtensios -> proíbe o aumento de atribultos, pode retirar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preço: 1.99, tag: 'Promoção'
})
console.log(produto)
console.log('Extensível: ', Object.isExtensible(produto) )

produto.nome = 'borracha' //os atribultos podem ser alterados, mas não adicionados 
produto.descricao = 'Serve para apagar seus erros'
console.log(produto)
delete produto.tag //pode ser excluído
produto.descricao = 'Borracha escolar' //ainda não funciona
console.log(produto)

//Object.seal não consegue nem adicionar e nem excluir, mas pode alterarr
const pessoa = { nome: 'Ana', idade: 25}
Object.seal(pessoa)
console.log(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Moreno'
pessoa.nome = 'Carol'
delete pessoa.idade
console.log(pessoa)

//Object.freeze => já foi visto. É um object.seal, mas também não permite alterações em atribultos.