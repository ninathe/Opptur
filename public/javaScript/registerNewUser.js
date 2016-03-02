
var USERNAME_REGEX = /^[a-zA-Z0-9]+$/;
var PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
var username;
var password;
var passwordConfirm;

//Validates the username
function checkUsername(){
    username = document.getElementById("reg_username").value;
    var validUsername = USERNAME_REGEX.test(username);

    //var validUsername = username.value.match(USERNAME_REGEX);
    //if(validUsername == null){     FØRSTE FORSØKS GREIE
    //    alert("Your username is not valid. Only characters and digits are acceptable.");
    //    username.focus();
    //    return false;
    //}
    if(username == "") {
        alert("Error: Username cannot be blank!");
        username.focus();
        return false;
    }
    if(!validUsername) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        username.focus();
        return false;
    }
    return true
}

//validate password
password = document.getElementById("reg_password").value;
passwordConfirm = document.getElementById("reg_password_confirm").value;
function checkPass(str) {
    return PASSWORD_REGEX.test(str);
}

function checkPassword() {
    if(password != "" && password == passwordConfirm) {
        if(!checkPass(password)) {
            alert("The password you have entered is not valid!");
            password.focus();
            return false;
        }
    } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        password.focus();
        return false;
    }
    return true;
}

var collection = db.collection('user');

//Checks that all input values are valid and if so add it to the database
function registerUser(){
//lag kode for å lagre informasjon om brukeren i databasen
    if(checkUsername()&& checkPassword()){
        var doc1 = {'username':'doc1', 'password' : 'sdffd'};

        collection.insert(doc1, {w:1}, function(err, result) {});

    }

    //}
}