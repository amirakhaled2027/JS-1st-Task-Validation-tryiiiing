function formValidate() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = docunment.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = " ";

    if(username.length < 5) {
        text = "Please Enter Valid Username";
        error.innerHTML = text;
        return false;
    }

    else if(email.indexOf("@") == -1 || email.length < 10) {
        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    }

    else if(isNaN(phone) || phone.length != 11) {
        text = "Please Enter Valid Phone";
        error.innerHTML = text;
        return false;
    }

    else {
        alert("Done");
        return true;
    }
}
