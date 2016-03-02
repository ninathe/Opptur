/**
 * Created by Marie on 02.03.2016.
 */

var usernameRegex = /^[a-zA-Z0-9]+$/;
var name;

function checkUsername(){
    name = document.getElementById("reg_username").value;
    var validUsername = name.value.match(usernameRegex);
    if(validUsername == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        name.focus();
        return false;
    }
}

function registerUser() {
    alert(name);
}