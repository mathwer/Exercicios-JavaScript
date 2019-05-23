const soma = function (x, y){
    return x + y 
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log (operacao(a, b))
}

imprimirResultado(3,4)
imprimirResultado(3,4 , (x, y) => x*y) 


function getCount(str) {
    var vowelsCount = 0;
    arr = str.split("")
    
    console.log(arr);
    return vowelsCount;
  }

  getCount("asvcgwwert13")
  