
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var fs          = require("fs");
var mongoose    = require("mongoose");
var router      = express.Router();

//Hentet fra filen user.js
var User        = require('./models/user');

router.get('/', function(req, res){
    res.json({message: 'wohooooooooo'});
});

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



/*-----------------------fra eksempel------------------------
    app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});


var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
};

app.get('/addUser', function (req, res) {  // noe annet enn /addUser?
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
});

*/