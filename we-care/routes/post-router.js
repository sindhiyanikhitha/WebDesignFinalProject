const express = require("express");
const postController = require("../src/controller/postController");
const commentRouter = require("./comment-router");
const router = express.Router();
router
  .route("/")
  .post(postController.createPost)
  .get(postController.getAllPosts);
router
  .route("/:id")
  .get(postController.getPostById)
  .patch(postController.updatePost)
  .delete(postController.deletePost);
router.route("/:id/like").patch(postController.handleLike);
router.use("/:id/comment", commentRouter);
module.exports = router;
