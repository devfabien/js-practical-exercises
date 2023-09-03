const valiableSwap=(a, b)=>{
    b=a+b;
    a=b-a;
    b=b-a;
    return `${a}, ${b}`
}
console.log(valiableSwap(4, 7))
