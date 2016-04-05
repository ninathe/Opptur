var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var tripSchema = new Schema({
    navn: { type: String, required: true, unique: true },
    beskrivelse: { type: String},
    koordinater: {type: String, required: true},
    sted: {type: String, required: true},
    turTid : {type: Number}
});

// the schema is useless so far
// we need to create a model using it
var Trip = mongoose.model('Trip', tripSchema);

// make this available to our users in our Node applications
module.exports = Trip;
