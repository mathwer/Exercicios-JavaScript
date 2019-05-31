//Exemplo para usar promise ao invés de callback em algumas situações
//http://files.cod3r.com.br/curso-js/turmaA.json
//http://files.cod3r.com.br/curso-js/turmaB.json
//http://files.cod3r.com.br/curso-js/turmaC.json
//Extrair o nome dos alunos 

//Sem usar o promise, usando o callback

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados =>{
            resultado += dados
        })
        res.on('end', ()=>{
            callback(JSON.parse(resultado))
        })

    })

}
//Se chama callback hell, por motivos óbvios
let nomes = []
getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))   //Não precisava do A, mas é para saber de onde vem o nome 
    console.log(nomes)
    getTurma('B', alunos =>{
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    })
    getTurma('C', alunos =>{
        nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
        console.log(nomes)
    })
    
})


