window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}
function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var errormsg = document.getElementById("errormsg");

    var FirstName = document.forms["myForm"]["firstname"]
    var Lastname = document.forms["myForm"]["lastname"]
    var Gender = document.forms["myForm"]["gender"];
    var Birthday = document.forms["myForm"]["bday"];
    var EmailAddress = document.forms["myForm"]["email"];
    var Username = document.forms["myForm"]["username"];
    var Password1 = document.forms["myForm"]["password1"];
    var Password2 = document.forms["myForm"]["password2"];


    if(FirstName.value == ""){
        alert("Firstname is empty");
        return false;
    }
    if(Lastname.value == ""){
        alert("Lastname is empty");
        return false;
    }
    if(Gender.value == ""){
        alert("Gender is empty");
        return false;
    }
    if(Birthday.value == ""){
        alert("Birthday is empty");
        return false;
    }
    if(EmailAddress.value == ""){
        alert("Email is empty");
        return false;
    }
    if(Username.value == ""){
        alert("Username is empty");
        return false;
    }
    if(Password1.value != Password2.value){
        errormsg.innerHTML = "Password doesn't match";
        return false;   
    }

    
    
}