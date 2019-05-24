var isSquare = function(n){
    var raiz = Math.sqrt (n) 
    if (Number.isInteger(raiz) === true)
    {
    return true
    }
    else{
        return false
    }
}
console.log (isSquare(5))