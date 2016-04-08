

function logIn(){
    var email           = document.getElementById("user").value;
    var password        = document.getElementById("pass").value;



    var dbUser = new User; // TODO: må bruke den User-collectionen fra DB
//finds the user with the email ****, selecting the name and password
    dbUser.findOne({ 'email': email, 'password' : password }, 'nickname password', function (err, user) {
        if (err) return handleError(err);
        alert('%s has the email %s with the password %s.', user.nickname, user.email, user.password ) // Noe has the email noe@hotmail.com with the password 123
    });
}