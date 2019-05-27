 
// Esse código package.jSon especifica os detalhes dos módulos. Após o nome Axios que foi a aplicação baixada, vem um símbolo antes da versão.
// Se o símbolo for ^, quer dizer q pode a tualizar até aquele versão. Se for ~, que dizer q pode alterar o fix '1.0.fix'. Se não tiver nada, é pq só pode utilizar aquela versão


//O outro arquivo packeage-lock.json deve ser upado para o git, para evitar bugs de versões diferentes"

//Mesmo apagando a pasta node_modules, temos o package.json, que especifica o que foi utilizado
//Também será incluído scripts nesse mesmo arquivo

//Como o index.js foi excluído, será necessário alterá-lo e criar um novo, ou indicar um existente. No caso, funcionários.js

//Usando o comando "npm i" será recriada a pasta node_modules, com os arquivos anteriores, a partir dos arquivos de package-lock e package .json
//Os comandos de script start e test são comandos padrões, por isso a princípio, o comando dev não funciona 
//Para rodar, tem que usar o "npm run dev"