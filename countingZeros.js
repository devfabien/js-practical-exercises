function countingZeros(num){
  let nums=[];
  for(let i=1;i<=num;i++){
        nums.push(i)
    }
    return nums.toString().split('').filter(el=>el==0).length
  }

console.log(countingZeros(101));
