// Sucesso ou erro da promessa


function falarDepoisDe(segundos, frase){    //Função que recebe dois parâmetros e retorna uma promessa
    return new Promise((resolve, reject) => {
        setTimeout(()=>{    //Delay, como se fosse um processo
            resolve(frase)      //Situação de quando a promessa for atendida. Para ser a situação de erro, tem q trocar para reject
        }, segundos*1000)   //padrão em milissegundos 
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?!?!?!'))    //É possível encadear vários then
    .then(outraFrase => console.log(outraFrase))
    .catch( e => console.log(e))    //Para tratar o caso de erro 


//A promise só aceita um único parâmetro. Então se tentasse passar um 'abc' depois de frase, ele seria ignorado, voltando undefined.
//Pode-se passar um objeto com outros atribultos dentro para acessar diferentes elementos