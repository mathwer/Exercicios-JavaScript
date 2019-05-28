//import { isContext } from "vm"; <- não lembro pq isso tá aqui, não lembro de ter colocado

//Chamar funções a partir da anterior, com uma função que sabe como deve se comportar a partir do resultado

//middleware pattern (chain of responsability)

const passo1 = (ctx, next) => { //ctx são os dados e next é a função que vai disparar o próximo passo
    ctx.valor1 = 'mid1'
    next()

}

const passo2 = (ctx, next) =>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3'  //Não tem valor next, pois é o passo final 

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => { //vai olhar no array de middlewares e vai executar a função com índice correspondente
        middlewares && indice <middlewares.length && 
            middlewares[indice](ctx, () => execPasso(indice+1))
    }
    execPasso(0)
}

const ctx = {}

exec(ctx, passo1, passo2, passo3) //pode trocar a ordem, omitir algum deles. Caso o passo 3 seja o primeiro, ele não irá realizar novos passos, pois não há uma chamada nexts
console.log(ctx )