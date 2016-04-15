var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// create a schema
var tripSchema = new Schema({
    tripName: { type: String, required: true},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    place: {type: String, required: true},
    description: String,
    duration : Number

});

var Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
