function validatePhoneNumber(phone){
    let leng = phone.replaceAll('-','').replaceAll(' ', '').length

    if(((phone.indexOf('-')===3&&phone.lastIndexOf('-')===7)||(phone.indexOf(' ')===3&&phone.lastIndexOf(' ')===7))|| leng===10){
        return true
    }
    else{
        return false
    }
}
console.log(validatePhoneNumber("1234567890"))

