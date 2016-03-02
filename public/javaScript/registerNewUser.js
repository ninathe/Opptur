
var usernameRegex = /^[a-zA-Z0-9]+$/;
var name;
//Validates the username
function checkUsername(){
    name = document.getElementById("reg_username").value;
    var validUsername = name.value.match(usernameRegex);
    if(validUsername == null){
        alert("Your first username is not valid. Only characters and digits are acceptable.");
        name.focus();
        return false;
    }
    return true
}

//validate password

function checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
}

function checkForm(form)
{
    if(form.username.value == "") {
        alert("Error: Username cannot be blank!");
        form.username.focus();
        return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        form.username.focus();
        return false;
    }
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
        if(!checkPassword(form.pwd1.value)) {
            alert("The password you have entered is not valid!");
            form.pwd1.focus();
            return false;
        }
    } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.pwd1.focus();
        return false;
    }
    return true;
}


//Checks that all input values are valid and if so add it to the database
function registerUser() {
//lag kode for å lagre informasjon om brukeren i databasen
    alert(name);
}