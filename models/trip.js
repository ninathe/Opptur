var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// create a schema
var tripSchema = new Schema({
    tripName: { type: String, required: true},
    latitude: {type: String},
    longitude: {type: String},
    difficulty : Number,
    place: {type: String, required: true},
    description: String,
    //duration : Number,
    center : Number,
    zoom : Number,
    points : Object
});

var Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;



//map
