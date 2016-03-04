var express=require('express');
var path=require('path');
var logger=require('morgan');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var mongoose =require('mongoose');
var app=express();
var router=express.Router();

//var passport=require('passport');
//var routes=require('./api.js');

app.use(express.static(path.join(__dirname,'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser('keyboardcat'));


//-----------------------API----------------------------------------

/*

 app.post('/test', function(req, res) {
 console.log(req.body);
 res.status(200);
 })
 */

app.post('/', function(req, res){

});






//-------------------------end API --------------------------------
app.use('/',router);







//catch404andforwardtoerrorhandler
app.use(function(req,res,next){
  var err="";//newError('NotFound');
  err.status=404;
  next(err);
});


//errorhandlers


app.use(express.static('public'));




//----------------koble til databasen--------------------------------

 //StandardURIformat:mongodb://[dbuser:dbpassword@]host:port/dbname
 var uri="mongodb://heroku_dvldc026:bkgs9p6shbfhl0ub46j51gk9b@ds015398.mongolab.com:15398/heroku_dvldc026";

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect(uri, function(err, db) {
  if (err) {
    return console.dir(err);
  }
  console.log("Vi er tilkoblet databasen");
});

module.exports=app;
