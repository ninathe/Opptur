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
var https       = require('https');
var http        = require('http');


app.use('/', express.static(path.join(__dirname,'/public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser('keyboardcat'));


//-----------------------API----------------------------------------


//app.use('/', router);

// Web routing
function send(res, path) {
    res.sendFile(path, function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            res.status(200).end();
        }
    });
}

// START SERVER

const PORT = 8080;
var server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening on http://%s:%s', host, port);
});

//------------USER---------

app.post('/signUp', function(req, res){
    var newUser = new User(req.body);
    newUser.save(function(err, user)  {
            if (err) return console.error(err);
            else console.log("signIn success")

        }
    )
});


app.post('/logIn', function(req,res) {
    //Talk to the database, check if user exist
    //finds the user with the email and password from user-input
    var dbUser = User.find(req.body, function (err, user) {
        if (user.length > 0) {
            var testtest =user[0].nickname;
            console.log(testtest);
            if (user.length > 0) {
                res.status(200).send({success: true, username: "" + testtest});
            } else {
                console.log('Wrong email or password');
            }
        }
    });
});

app.get('/getUsername', function(req,res) {
    console.log("dette er brukeren: " + bruker);
});


//-------------------------TRIP --------------------------------


app.post('/makeTrip', function (req, res) {
    var newTrip = new Trip(req.body);
    newTrip.save(function (err, trip) {
            if (err) return console.error(err);
            else console.log("success");
        }
    )
});


//API google:
function getGoogleDur(lat, long, dest, callback) {
    var options = {
        host: 'maps.googleapis.com',
        port: 443,
        path: '/maps/api/distancematrix/json?units=metric&origins=' +
        lat + ',' + long + '&destinations=' + dest +
        '&key=AIzaSyCVws1GADOVAu0rPTddKuC0gHka0F32_VA'
    };

    https.get(options,
        function(res2) {
            res2.setEncoding('utf8');

            var str = '';
            res2.on('data', function(chunk) {
                str += chunk;
            }).on('end', function() {
                callback(str);
            });
        }
    ).on('error', function(err) {
        console.log('GOT ERROR: ' + err.message);
    });
}
app.post('/findTrip', function (req, res) {
    var query = {
        'difficulty': { $lte: req.body.difficulty },
        'duration': { $lte: req.body.duration },
        'godkjent': true
    };
    //Talks to the database, check if trip exist
    var dbTrip = Trip.find(query, function (err, trip) {
        if (trip.length > 0) {
            //var testtur =trip;

            var trips = [];
            for (i=0; i < trip.length; i ++) {
                trips.push(trip[i]);
            }

            var latOrig = req.body.lat;
            var longOrig = req.body.long;
            var distance = Number(req.body.distance) * 3600;
            var dest = '';
            for (var t = 0; t < trips.length; ++t)
                dest += trips[t].latitude + '%2C' + trips[t].longitude + '%7C';

            getGoogleDur(latOrig, longOrig, dest,
                function(data) {
                    var json = JSON.parse(data);
                    var validTrips = [];
                    for (var d = 0; d < json.destination_addresses.length; ++d) {
                        if (json.rows[0].elements[d].duration.value <= distance)
                            validTrips.push(trips[d]);
                    }
                    res.status(200).send({success: true, trips: validTrips});
                }
            );

        } else {
            console.log("error - wrong input");
            res.status(500).send({success: false});
        }
    });
});

//API Varsom

////API google:
//function getGoogleDur(lat, long, dest, callback) {
//    var options = {
//        host: 'maps.googleapis.com',
//        port: 443,
//        path: '/maps/api/distancematrix/json?units=metric&origins=' +
//        lat + ',' + long + '&destinations=' + dest +
//        '&key=AIzaSyCVws1GADOVAu0rPTddKuC0gHka0F32_VA'
//    };
//
//    https.get(options,
//        function(res2) {
//            res2.setEncoding('utf8');
//
//            var str = '';
//            res2.on('data', function(chunk) {
//                str += chunk;
//            }).on('end', function() {
//                callback(str);
//            });
//        }
//    ).on('error', function(err) {
//        console.log('GOT ERROR: ' + err.message);
//    });
//}
//app.post('/findTrip', function (req, res) {
//    var query = {
//        'difficulty': { $lte: req.body.difficulty },
//        'duration': { $lte: req.body.duration },
//        'godkjent': true
//    };
//    //Talks to the database, check if trip exist
//    var dbTrip = Trip.find(query, function (err, trip) {
//        if (trip.length > 0) {
//            //var testtur =trip;
//
//            var trips = [];
//            for (i=0; i < trip.length; i ++) {
//                trips.push(trip[i]);
//            }
//
//            var latOrig = req.body.lat;
//            var longOrig = req.body.long;
//            var distance = Number(req.body.distance) * 3600;
//            var dest = '';
//            for (var t = 0; t < trips.length; ++t)
//                dest += trips[t].latitude + '%2C' + trips[t].longitude + '%7C';
//
//            getGoogleDur(latOrig, longOrig, dest,
//                function(data) {
//                    var json = JSON.parse(data);
//                    var validTrips = []
//                    for (var d = 0; d < json.destination_addresses.length; ++d) {
//                        if (json.rows[0].elements[d].duration.value <= distance)
//                            validTrips.push(trips[d]);
//                    }
//                    res.status(200).send({success: true, trips: validTrips});
//                }
//            );
//
//        } else {
//            console.log("error - wrong input");
//            res.status(500).send({success: false});
//        }
//    });
//});



// app.get('/googleduration', function(req, res, next) {
//     console.log("GET %s", req.path);

//     var latitudeOrigin = req.query.lat;
//     var longitudeOrigin = req.query.long;

//     var options = {
//         host: 'maps.googleapis.com',
//         port: 443,
//         path: '/maps/api/distancematrix/json?units=metric&origins=68.1513,14.1983&destinations=68.2074%2C14.4803%7C68.2343%2C14.5682%7C&key=AIzaSyCVws1GADOVAu0rPTddKuC0gHka0F32_VA'
//     };

//     https.get(options,
//         function(res2) {
//             console.log('GOT RESPONSE: ' + res2.statusCode);
//             res2.setEncoding('utf8');
//             res2.on('data', function(chunk) {
//                 res.status(200).send(chunk);
//             });
//         }
//     ).on('error', function(err) {
//         console.log('GOT ERROR: ' + err.message);
//     });
// });

app.all('/*', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    console.log("GET %s", req.path);
    send(res, __dirname + '/public/index.html');
});





//----------------koble til databasen--------------------------------


mongoose.connect('mongodb://heroku_6055vbw4:blj69kp68glsc4nefksbvp48d3@ds019698.mlab.com:19698/heroku_6055vbw4');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
});

//-------------------------------------------------------------------


module.exports = app;
