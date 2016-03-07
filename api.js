
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var fs          = require("fs");
var mongoose    = require("mongoose");
var router      = express.Router();

mongoose.connect('mongodb://heroku_dvldc026:bkgs9p6shbfhl0ub46j51gk9b@ds015398.mongolab.com:15398/heroku_dvldc026');
db=mongoose.connection;

var User        = require('./models/user');

router.get('/', function(req, res){


    res.json({message: 'wohooooooooo'});
});

//---post----
var formData = {name:"ravi",age:"31"}; //Array

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