var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// create a schema
var tripSchema = new Schema({
    tripName: { type: String, required: true, unique: true },
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    place: {type: String, required: true},
    description: String,
<<<<<<< HEAD
    duration : Number,
<<<<<<< HEAD
    difficulty : Number
=======
    duration : Number
    //difficulty : Number
>>>>>>> origin/master
    //users : {type: User}
=======
    users : {type: String}
>>>>>>> angularTestBranch

});

var Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
