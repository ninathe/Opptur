var express     = require('express');
var path        = require('path');
var logger      = require('morgan');
var cookieParser= require('cookie-parser');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var app         = express();
var router      = express.Router();
var User        = require('./models/user');
var Trip        = require('./models/trip');

app.use(express.static(path.join(__dirname,'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser('keyboardcat'));





//-----------------------API----------------------------------------


app.use('/',router);

app.post('/signUp', function(req, res){
  console.log(req.body);
  var newUser = new User(req.body);
  newUser.save(function(err, user)  {
        if (err) return console.error(err);
        else console.log("success")

      }
  )
});


app.post('/logIn', function(req,res){

  //Talk to the database, check if user exist
  //finds the user with the email and password from user-input
  //res.writeHead(200);
  var dbUser = User.find( req.body , function (err, user) {
    //console.log(user);
    //var json = user.email; // TODO: ikke JSON-objekt?
    console.log(res.json(user));



    if(user.length>0) {
      //res.send(true);
      setActiveUser(user);

      //console.log("AKtiv bruker er "+activeUser);
    }else {
      //res.send(false);
      console.log('Wrong email or password');
      console.log("error - wrong input");
    }
  });
});

//-------------------------TRIP --------------------------------

app.post('/makeTrip', function(req, res){
  console.log(req.body);
  var newTrip = new Trip(req.body);
  newTrip.save(function(err, user)  {
        if (err) return console.error(err);
        else console.log("success")

      }
  )
});


//-------------------------activeUser-----------------------------
var activeUser;
function setActiveUser(user){
  activeUser= user;
}

function getActiveUser(){
  return activeUser;
}







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
