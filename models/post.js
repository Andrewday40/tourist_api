
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  city: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  person: {
    type: String,
    require: true
  },
  catagory: {
    type: String,
    require: true
  }
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
