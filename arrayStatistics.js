function arrayStats(array){
    let newObj={};
    let total= array.reduce((a, b)=>a+b,0);
    newObj.sum=total
    newObj.average=(total/array.length).toFixed(2);
    newObj.min= Math.min(...array)
    newObj.max= Math.max(...array)
    return newObj   
}
console.log(arrayStats([5,1,4,2,3]))