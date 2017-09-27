// Require mongoose
var mongoose = require('mongoose');
// Create a schema class
var Schema = mongoose.Schema;

// Create rrack schema
var TrackSchema = new Schema({
  // title is a required string
  id: {
    type: String,
    required: true
  },
  // link is a required string
  imageUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  // This only saves one lapTime's ObjectId, ref refers to the lapTime model
  lapTime: {
    type: Schema.Types.ObjectId,
    ref: 'lapTime'
  }
});

// Create the Track model with the TrackSchema and export
module.exports = mongoose.model('Track', TrackSchema);