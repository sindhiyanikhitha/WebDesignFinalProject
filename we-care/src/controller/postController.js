const Post = require("../../models/post-model");
// const User = require("../../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
// Create post
exports.createPost = catchAsync(async (req, res, next) => {
  if (!req.body.image && !req.body.caption)
    return next(new AppError(400, "A caption or an image must be provided"));
  const post = await Post.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      post,
    },
  });
});
// Get All Posts
exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json({
    status: "success",
    data: {
      posts,
    },
  });
});

// Get Posts by Id
exports.getPostById = catchAsync(async (req, res, next) => {
  const posts = await Post.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      posts,
    },
  });
});

// Get All Posts
exports.updatePost = catchAsync(async (req, res, next) => {
  if (req.body.image === "" && req.body.caption === "")
    return next(new AppError(400, "A caption or an image must be present !!"));
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      post,
    },
  });
});
// Delete Post By  id
exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
  });
});

// Handle Likes
exports.handleLike = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  // Since we are storing users as object id we need to convert to string to compare
  const user = post.usersLiked.filter(
    (el) => el["_id"].toString() === req.body.user
  );
  // console.log(user);
  let usersLiked = post.usersLiked;
  let likes = post.likes;
  // If the user already liked it, remove like else add
  if (user.length === 1) {
    usersLiked = post.usersLiked.filter(
      (el) => el["_id"].toString() !== req.body.user
    );
    likes -= 1;
  } else {
    usersLiked = [...post.usersLiked, req.body.user];
    likes += 1;
  }
  const updatedPost = await Post.findByIdAndUpdate(
    post["_id"],
    { usersLiked, likes },
    {
      runValidators: true,
      new: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: {
      post: updatedPost,
    },
  });
});
