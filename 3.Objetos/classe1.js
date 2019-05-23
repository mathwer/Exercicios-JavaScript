class Lançamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome,
            this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lançamentos = []
    }


    addLançamentos(...lançamentos) {
        lançamentos.forEach(l => this.lançamentos.push(l))

    }

    sumario() {
        let valorConsolidado = 0
        this.lançamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salário = new Lançamento('Salário', 35000)
const contaDeLuz = new Lançamento('Luz', -250)

const contas = new CicloFinanceiro(7, 2018)
contas.addLançamentos(salário, contaDeLuz)
console.log(contas.sumario())