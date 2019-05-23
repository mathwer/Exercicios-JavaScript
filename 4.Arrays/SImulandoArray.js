// simulando um array a partir de objetos

const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia',
    3: 'José'
}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
        value: function () {return Object.values(this)},
        enumerable: false
})

console.log(quaseArray[0])

const MeuArray = ['Rafael', 'Ana', 'Bia', 'José']

console.log(quaseArray.toString(), MeuArray)