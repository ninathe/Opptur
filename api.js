
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var fs          = require("fs");
var mongoose    = require("mongoose");
var router      = express.Router();

//Hentet fra filen user.js
var User        = require('./models/user');

/*
router.get('/', function(req, res){
    res.json({message: 'wohooooooooo'});
});
*/

//---post----
var formData = { password : "fsdsf", nickname:"ravi",email:"31"}; //Array
var newUser = new User(formData);



$.ajax({
    url : "AJAX_POST_URL",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {
        //data - response from server
    },
    error: function (jqXHR, textStatus, errorThrown)
    {

    }
});


//----------get---------
Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
    if (err) return handleError(err);
    console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
})

//finds the user with the email mar@hotmail.com, selecting the name and password
newUser.findOne({ 'email': 'noe@hotmail.com' }, 'nickname password', function (err, user) {
    if (err) return handleError(err);
    alert('%s has the email %s with the password %s.', user.nickname, user.email, user.password ) // Noe has the email noe@hotmail.com with the password 123
})
