function convertNullableValues(obj){
  for(let key in obj){
    if(obj[key]===undefined){
        obj[key]='';
    }else if(obj[key]===null){
     obj[key]=0;
    }else {
        continue
    }
  }
   return obj
}
console.log(convertNullableValues({name:undefined,price:3000,nice:"wow",yet:null}))