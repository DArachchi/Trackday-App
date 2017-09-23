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
  // This only saves one comment's ObjectId, ref refers to the comment model
  comment: {
    type: Schema.Types.ObjectId,
    ref: 'comment'
  }
});

// Create the Track model with the TrackSchema and export
module.exports = mongoose.model('Track', TrackSchema);