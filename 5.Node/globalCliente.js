require('./global') //Só precisa fazer isso uma única vez para funcionar em todos os aplicativos

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' //como no global a função está como freeze, ele não será mudado 
console.log(MinhaApp.nome)

