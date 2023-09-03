function addNumbers(str){
   return str.split(' ').map(Number).join(' ')
    
}
console.log(addNumbers("5 + 4 * 3 / 2 - 1"))