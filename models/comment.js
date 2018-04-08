var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  title: String,
  body: String
});

let Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
