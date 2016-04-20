var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// create a schema
var tripSchema = new Schema({
    tripName: { type: String, required: true},
    latitude: {type: String},
    longitude: {type: String},
    place: {type: String, required: true},
    difficulty : Number,
    description: String,
    duration : Number,
    center : Object,
    zoom : Number,
    path : Object,
    godkjent: Boolean
});

var Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;



//map
