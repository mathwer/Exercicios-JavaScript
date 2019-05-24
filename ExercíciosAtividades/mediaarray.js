function find_average(array) {

var reducer = (accumulator, currentValue) => accumulator + currentValue;
var tamanho = array.lenght
media = reducer / tamanho

if (array.lenght === 0 ){
    return 0
}
else{
return media
}
}

console.log (find_average([1,4,7,3,1,2,6,8]))