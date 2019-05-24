//Usado muito como solução para rodar o javascript no backend
//JavaScript é rodado tanto no servidor quanto no runtime


//Conceito de módulos
//Front-end e back-end são organizados em formas diferentes. 
//Front-end -> vários arquivos concatenados, de forma que fique mais rápida o processamento
//Pode-se usar o formato JSON, por exemplo 
 

//Em node, um arquivo representa um nódulo.
//O que está escrito em um nódulo fica visível apenas no nódulo, tendo que exportar ou importar para que seja utilizado em outros arquivos
//Tudo o que foi feito até agora são nódulos do node, onde utilizando o crt+alt+n, executa o node.

//Para exportar para outro arquivo
//Pode-se utilizar esses modos, os 3 primeirops vão para um nódulo e o objeto irá para outro

this.ola = 'Iae, galera' 
exports.bemvindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até a próxima, galerinha :D'

module.exports= {
    bomDia: 'Bom Dia!',
    boaNoite(){
        return 'Boa noite!'
    }
}