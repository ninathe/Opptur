var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongodb = require('mongodb');

var app = express();
//HALLELUJA!!!!!!

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;


// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname

var uri = 'mongodb://heroku_dvldc026:bkgs9p6shbfhl0ub46j51gk9b@ds015398.mongolab.com:15398/heroku_dvldc026';

mongodb.MongoClient.connect(uri, function(err, db) {

  if (err) {
    console.log("unable to connect to MongoDBserver Error...", err);
  } else {
    console.log("WE are conneced");
    //insert the rest of the databse queries here

  }
  var collection = db.collection({
    _id: String, //email
    userName: String,
    password: String
  });

  var user = mongodb.model('emp', collection);

  app.post('/new', function(req, res){   // eller skrive noe annet som tigger en action når man trykker "registrer ny bruker"
    new user({
      _id       : req.body.email,
      userName  : req.body.name,
      password  : req.body.password
    }).save(function(err, doc){
      if(err) {
        res.json(err);
      } else res.send("Successfully inserted")
    })
  });
  /*var collection = db.collection('user');

   collection.find({name: 'eksempel_bruker'}).toArray(function (err, result) { //{name: 'eksempel_bruker'}).toArray(function (err, result) {
   if (err) {
   console.log(err);
   } else if (result.length) {
   console.log('Found:', result);
   } else {
   console.log('No document(s) found with defined "find" criteria!');
   }
   //Close connection
   db.close();
   });*/


  //function doesUserExist(uName,Pass, callback) {
  //
  //  collection.find({name: 'eksempel_bruker'}).toArray(function (err, result) {
  //    //console.log('uName: '+uName);   hentet fra: http://stackoverflow.com/questions/30909867/findone-to-return-boolean-value-nodejs
  //    //console.log('Pass: '+Pass); // this will print on console , working fine
  //    if (err)
  //      return callback(err, false);
  //    if (result === null) {
  //      return callback(null, false); // this will return undefined to the controller
  //
  //    } else {
  //      return callback(null, true);  // this will return undefined to the controller
  //    }
  //  });
  //}

});


