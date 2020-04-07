const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A post can only be created by user"],
  },
  caption: {
    type: String,
  },
  image: {
    type: String,
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
  ],
});
postSchema.pre(/^find/, function (this) {
  this.populate({
    path: "user",
    select: "name",
  }).populate({
    path: "comments",
  });
});
const Post = new mongoose.model("Post", postSchema);
module.exports = Post;
