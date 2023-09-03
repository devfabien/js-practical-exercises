function removeDuplicate(array){
    let newArray=[];
    array.map((value) =>{
        if(!newArray.includes(value)){
            newArray.push(value);
        }
    })
    return newArray;
}
console.log(removeDuplicate([1,3,4,4,9,7,1]))