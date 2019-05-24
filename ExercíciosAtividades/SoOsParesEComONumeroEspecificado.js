/*dado um array e um número, retornar os ultimos números pares até a quantidade number. Por exemplo
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

function evenNumbers(array, number) {
    divPor2 = valor => valor%2 != 1
    console.log(array.filter(divPor2))
}

  
    console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9],3))
    console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
    console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))