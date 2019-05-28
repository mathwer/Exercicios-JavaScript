const anonimo = process.argv.indexOf('-a') !== -1 
console.log(anonimo)    //Testando chamada diretamente no terminal, de forma que aqui ele retorna true, caso chame a constante anonimo e false quando chama outra coisa ou nada

if(anonimo){
    process.stdout.write('Fala Anônimo! \r\n')  //Lembrando que no Linux é \n e no windows é \r\n
    process.exit()
} else{
    process.stdout.write(`Informe o seu nome: `) 
    process.stdin.on('data', data => {  //Pede pelo terminal um nome que pode ser digitado
        const nome = data.toString().replace('\r\n', '') //Retira o enter que o usuário passa quando termina de escrever o nome 
        
        process.stdout.write(`Fala ${nome}!! \r\n`)
        process.exit()  //matando o programa
    })
}