function removeSmallest(numbers) {
    // throw "TODO: removeSmallest";
    
    if (numbers.lenght === 0)
        {
            return []
        }

    menor = Math.min(null, numbers)
    //numbers.splice (menor, 1)
    var final = numbers.filter(menor)
    
    return final 
   
}
   console.log(removeSmallest[4, 64, 3, 1 , 6 ,6 ,7 ,3 ,1])