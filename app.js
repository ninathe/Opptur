var express=require('express');
var path=require('path');
var logger=require('morgan');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var mongoose =require('mongoose');
//var passport=require('passport');
var MongoClient = require('mongodb').MongoClient;

//varUser=require('./models/user.js');

var app=express();

app.use(express.static(path.join(__dirname,'public')));
//varroutes=require('./api.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser('keyboardcat'));
//app.use(passport.initialize());

//configurepassport
//passport.use(User.createStrategy());

//routes
//app.use('/user/',routes);
//app.use('/',routes);


//catch404andforwardtoerrorhandler
app.use(function(req,res,next){
  varerr=newError('NotFound');
  err.status=404;
  next(err);
});


//errorhandlers

if(app.get('env')==='development'){

}

 //StandardURIformat:mongodb://[dbuser:dbpassword@]host:port/dbname
 var uri="mongodb://heroku_dvldc026:bkgs9p6shbfhl0ub46j51gk9b@ds015398.mongolab.com:15398/heroku_dvldc026";

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect(uri, function(err, db) {
  if (err) {
    return console.dir(err);
  } return console.log("Vi er tilkoblet databasen");
});

module.exports=app;

/*


 mongodb.MongoClient.connect(uri,function(err,db){


 if(err){
 console.log("unabletoconnecttoMongoDBserverError...",err);
 }else{
 console.log("WEareconneced");
 //inserttherestofthedatabsequerieshere

 }
 /!*varcollection=db.collection({
 _id:String,//email
 userName:String,
 password:String
 });

 varuser=mongodb.model('emp',collection);*!/
 /!*
 app.post('/new',function(req,res){//ellerskrivenoeannetsomtiggerenactionnårmantrykker"registrernybruker"
 newuser({
 _id:req.body.email,
 userName:req.body.name,
 password:req.body.password
 }).save(function(err,doc){
 if(err){
 res.json(err);
 }elseres.send("Successfullyinserted")
 })
 });*!/
 /!*varcollection=db.collection('user');

 collection.find({name:'eksempel_bruker'}).toArray(function(err,result){//{name:'eksempel_bruker'}).toArray(function(err,result){
 if(err){
 console.log(err);
 }elseif(result.length){
 console.log('Found:',result);
 }else{
 console.log('Nodocument(s)foundwithdefined"find"criteria!');
 }
 //Closeconnection
 db.close();
 });*!/


 //functiondoesUserExist(uName,Pass,callback){
 //
 //collection.find({name:'eksempel_bruker'}).toArray(function(err,result){
 ////console.log('uName:'+uName);hentetfra:http://stackoverflow.com/questions/30909867/findone-to-return-boolean-value-nodejs
 ////console.log('Pass:'+Pass);//thiswillprintonconsole,workingfine
 //if(err)
 //returncallback(err,false);
 //if(result===null){
 //returncallback(null,false);//thiswillreturnundefinedtothecontroller
 //
 //}else{
 //returncallback(null,true);//thiswillreturnundefinedtothecontroller
 //}
 //});
 //}

 });

 */