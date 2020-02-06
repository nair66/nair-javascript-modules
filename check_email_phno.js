//the phno input must include only 10 digits without any extra symbols such as '+',
//phno data type can be int, as it it converted to string.
function checkEmailAndPhno(phno,email) {
    var phoneNoChk = /^\d{10}$/;
    phno = phno.toString()
    if (!phno.match(phoneNoChk)) {
        console.log('invalid phone')
        return false;
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
        console.log('invalid email')
        return false;
    }
    
    return true
}


console.log(checkEmailAndPhno('9283281205','rian@gmail.com'))