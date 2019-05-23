// herança em classe => vai acontecer da mesma forma

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{      //extends Diz qual classe é protótipo
    constructor(sobrenome, profissão = 'Professor'){
        super(sobrenome)
        this.profissão = profissão

    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
console.log(typeof filho)