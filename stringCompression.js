function compressString(arr){
    let currElement=arr[0];
    let splitted=arr.split('');
    let newstr='';
    let counter=0;
    splitted.map(el=>{
        if(el!=currElement){
            newstr+=currElement+counter
            currElement=el
            counter=0
        }
        return counter++
    })
    return newstr+currElement+counter
}
console.log(compressString("AAAABBBCCDAA"))