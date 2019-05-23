//Método que não existe oficalmente na API

const escola = [{
    nome: 'Tuma M1', 
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },
    {
        nome: 'Maria',
        nota: 7.5        
    }]
},
{   nome: 'Tumar M2',
    alunos:[{
        nome: 'Ana',
        nota: 9.3
    },
    {
        nome: 'José',
        nota: 7.6
    }]
}]

//Extrair todas as notas, independente da turma

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) //O resultado é um array com outros 2 dentro, separando por turmas. O flatMap retorna um array com todas as notas

Array.prototype.flatMap = function(callback){    //Colocando no prototype para poder chamar em qualquer array
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)