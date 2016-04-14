var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// create a schema
var tripSchema = new Schema({
    tripName: { type: String, required: true, unique: true },
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    place: {type: String, required: true},
    description: String,
    duration : Number
    //difficulty : Number
    //users : {type: User}

});

var Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
