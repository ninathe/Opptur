var express     = require('express');
var path        = require('path');
var logger      = require('morgan');
var cookieParser= require('cookie-parser');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var app         = express();
var router      = express.Router();
var User        = require('./models/user');

//var passport=require('passport');
//var routes=require('./api.js');

app.use(express.static(path.join(__dirname,'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser('keyboardcat'));


//-----------------------API----------------------------------------


app.use('/',router);

app.post('/signIn', function(req, res){
  var newUser = new User(req.body);
  newUser.save(function(err, user)  {
        if (err) return console.error(err);
    else console.log("success")
  }
  )
});







//-------------------------end API --------------------------------





//catch404andforwardtoerrorhandler
app.use(function(req,res,next){
  var err="";//newError('NotFound');
  err.status=404;
  next(err);
});


//errorhandlers
app.use(express.static('public'));




//----------------koble til databasen--------------------------------


mongoose.connect('mongodb://heroku_6055vbw4:blj69kp68glsc4nefksbvp48d3@ds019698.mlab.com:19698/heroku_6055vbw4');
var db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

//-------------------------------------------------------------------


module.exports=app;
