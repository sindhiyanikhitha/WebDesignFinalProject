const mongoose = require("mongoose");
const commentScema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: [true, "A comment should have text"],
  },
});
commentScema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name",
  });
  next();
});
const Comment = new mongoose.model("Comment", commentScema);
module.exports = Comment;
