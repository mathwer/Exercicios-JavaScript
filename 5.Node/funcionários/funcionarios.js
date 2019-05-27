const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)


//Desafio: Pegar a mulher chinesa com menor salário
    const chinaMulher = funcionarios.filter((funcionarios)=> funcionarios.genero === 'F').filter((funcionarios)=> funcionarios.pais === 'China')
    //console.log(chinaMulher)    //Retorna as mulheres que são chinesas


    //para pegar o menor salário
    const menorSalario = (func, funcAtual) => {     //Essa função vai procurar a pessoa com o menor salario
        return func.salario < funcAtual.salario ? func : funcAtual //caso seja verdadeiro, retorna func, caso falso, retorna funcAtual
    }
    const chinaMulherMenor = chinaMulher.reduce(menorSalario)
    console.log(chinaMulherMenor)
})

