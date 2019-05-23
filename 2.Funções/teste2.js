/*var aquelaFuncao = function(dado){
var dado
var dSplit = aquelaFuncao.split
if (Array.isArray(dado) === true){
Array.join()
}

dado = "asid"
console.log(dSplit)

}
console.log(aquelaFuncao("asdo"))*/

function findSum(n) {
    var list = []
    var i = 0 
    while (i <= n ){
        if(i % 3 != 0 && i%5 != 0){
            i++
            continue;
        }
        else{
            
            list.push(i)
            i++
        }
        
    }
    
 return list.reduce((a,b) => a+b, 0)  
 }
  

  findSum(33)