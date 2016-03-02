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
  }
  console.log("Vi er tilkoblet databasen");

  var collection = db.collection('test');
  var doc1 = {'brukernavn':'doc1', 'passerod' : 'sdffd'};
  var doc2 = {'hello':'doc2'};
  var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];
  //
  collection.insert(doc1);
  //
  collection.insert(doc2, {w:1}, function(err, result) {});
  //
  collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
  //var collection = db.collection('test');
  //var doc = {mykey:1, fieldtoupdate:1};
  //
  //collection.remove();

  var collection = db.collection('test');
  var docs = [{mykey:1}, {mykey:2}, {mykey:3}];

  collection.insert(docs, {w:1}, function(err, result) {

    //collection.find().toArray(function(err, items) {});

    var stream = collection.find({mykey:{$ne:2}}).stream();
    stream.on("data", function(item) {});
    stream.on("end", function() {});

    //collection.findOne({mykey:1}, function(err, item) {});

    return console.toLocaleString(stream);
  });
  });

 var collection2 = db.collection('user'){
 _id:String, //email
 userName :String,
 password :String
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