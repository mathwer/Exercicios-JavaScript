//console.log(global)

global.MinhaApp = Object.freeze({         //tomar cuidado, pois pode alterar algum valor ou chamar de forma indevida
    saudacao () {
        return 'Estou em todos os lugares XD'
    },
    nome: 'Sistema Legal'
})

//é preferível utilizar o sistema de módulos, para que não altere algo de forma crítica no global.