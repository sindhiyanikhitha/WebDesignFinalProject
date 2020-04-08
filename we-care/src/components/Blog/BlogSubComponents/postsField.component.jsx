import React from "react";
import Post from "./post.component";
import { Grid, Container } from "@material-ui/core";
const PostField = ({ posts, ...othetProps }) => {
  console.log(posts);
  return (
    <Grid container direction="column" spacing={3}>
      {posts.map((post) => (
        <Grid item key={post["_id"]}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
export default PostField;
