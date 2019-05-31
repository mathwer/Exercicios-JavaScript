// operador ... rest(juntar) / spread (espalhar)
//usar rest como parâmetro de função (revisão2.js)

//usar spread com objeto

const funcionario = {nome:'Maria', salario: 12790.99}
const clone = {ativo: true, ...funcionario} //Os 3 pontos dizem para espalhar todos os atribultos de funcionario dentro de clone
console.log(clone) //O clone é uma cópia. Alterar os atribultos dentro dele não vai mudar o no funcionário
funcionario.nome = 'Joana' //Alterar o original depois do clone já estar setado também não vai mudar o clone
console.log(funcionario)
console.log(clone)

//Usar spread com array

const grupoA = ['João', 'Pedro', 'Gabriel']
const grupoB = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoB)

