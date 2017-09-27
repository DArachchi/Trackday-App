// Require mongoose
var mongoose = require('mongoose');
// Create a schema class
var Schema = mongoose.Schema;

// Create lapTime schema
var LapTimeSchema = new Schema({
  // Just a string
  title: {
    type: String
  },
  // Just a string
  body: {
    type: String
  }
});

// Create the LapTime model with the LapTimeSchema and export
module.exports = mongoose.model('LapTime', LapTimeSchema);
