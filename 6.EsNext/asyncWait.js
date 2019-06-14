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

//Recurso do ES8 
//Simplificar o uso do promise

let obterAlunos = async () => { //Tem q usar async no nome da função para funcionar, o await naõ funcionaria  
    const TurmaA = await getTurma('A')  
    const TurmaB = await getTurma('B')
    const TurmaC = await getTurma('C')
    return [].concat(TurmaA,TurmaB,TurmaC)
} //retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))  //Atribuir o resultado anterior à variável nomes 