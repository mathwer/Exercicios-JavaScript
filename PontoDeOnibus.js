//Quantas pessoas sobram no onibus, considerando um array em cada ponto onde o primeiro número é a quantidade que sobe e o segundo, a quantidade que desce.

var number = function(busStops){
    let onibusFinal = busStops.reduce((total, valorAtual) => total.concat(valorAtual), []) 
    console.log(onibusFinal)
    console.log(typeof onibusFinal[0])
    console.log(onibusFinal.lenght)
    //o método anterior vai fazer o array ficar flat, retirando os arrays de dentro dele
    let i = 0
    let onibusSoma = 0
    let onibusSub = 0
    while (i < onibusFinal.lenght){
        if (i%2 == 0){
            onibusSoma += onibusFinal[i] 
            i++
            return onibusSoma
            
        }
        else{
            onibusSub += onibusFinal[i]                      
        }

}
    console.log(i)
    return onibusSoma - onibusSub
}

console.log(number([[10,0],[3,5],[5,8]]))