//http://files.cod3r.com.br/curso-js/turmaA.json
//http://files.cod3r.com.br/curso-js/turmaB.json
//http://files.cod3r.com.br/curso-js/turmaC.json


const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject)=>{
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end', ()=>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){ //vai cair nesse caso caso tente fazer parse de algo q não é JSON, por exemplo
                    reject(e)
                }
            })
    
        })
    })

}
/*
let nomes = []      

getTurma('A').then(alunos =>{       //Forma parecida com o anterior. Promise hell XD 
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) //Sequencial, demora mais 
    console.log(nomes)
    getTurma('B').then(alunos =>{
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    })
    getTurma('C').then(alunos =>{
        nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
        console.log(nomes)
    })
    
})
*/

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])    
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    

getTurma('D').catch(e => console.log(e.message)) //Retorna um erro, pode customizar a mensagem 