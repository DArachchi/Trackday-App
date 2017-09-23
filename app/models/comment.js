// Require mongoose
var mongoose = require('mongoose');
// Create a schema class
var Schema = mongoose.Schema;

// Create comment schema
var CommentSchema = new Schema({
  // Just a string
  title: {
    type: String
  },
  // Just a string
  body: {
    type: String
  }
});

// Create the Comment model with the CommentSchema and export
module.exports = mongoose.model('Comment', CommentSchema);
