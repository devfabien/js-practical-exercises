function GCD(a, b){
    let result=1;
    for(let i=1;i<=a && i<=b;i++){
        if(a%i==0 && b%i==0){
            result=i;
        }
    }
    return result;
   
}
console.log(GCD(12,20))