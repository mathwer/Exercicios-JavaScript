//dado um numero num, serparar os dígitos e multiplicá-los, contar quantas vezes esse processo pode ser feito até sobrar apenas 1 dígito

function persistance(num){
    let i = 0
    while(num >= 10 || num <= -10){
    stringNum = num.toString()
    ArNum = stringNum.split('')
    num = ArNum.reduce ( (a,b ) => a*b)
    i++   
    }
   console.log(i)
}


persistance(999) // 9*9*9= 729 => 7*2*9 => 126 => 1*2*6 => 12 => 1*2 => 2, ou seja , 4 vezes 
persistance(4) // 0 vezes, pois 4 já é um número de um único dígito