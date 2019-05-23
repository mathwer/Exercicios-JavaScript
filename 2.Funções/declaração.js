//function declaration
// ela já é interpretada antes de executar o código
console.log (soma(3, 4))

function soma (x,y){
    return x + y
}

//function expression
// a sub não funcionaria sendo chamada antes
const sub = function (x,y){
   return x - y 
}
console.log (sub(5, 3))


//named function expression 
// essa também precisa ser declarada antes de ser chamada
const mult = function mult(x, y){
    return x * y
}
