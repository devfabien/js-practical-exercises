function oddSquares(array){
    let filteredArray= array.filter(a=>a%2!==0);
   return filteredArray.map(a=>a**2)
    
}
console.log(oddSquares([1,2,3,5,6,7,8,12,22]))