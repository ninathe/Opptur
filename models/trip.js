var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
//var User        = require('./user');

// create a schema
var tripSchema = new Schema({
    tripName: { type: String, required: true, unique: true },
    latitude: {type: String, required: true},
    longitude: {type: Number, required: true},
    place: {type: Number, required: true},
    description: String,
    duration : Number,
    difficulty : Number
    //users : {type: User}

});

var Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
