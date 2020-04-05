import React from "react";
import "./blog.styles.css";
import { Grid, Container } from "@material-ui/core";
import BlogHeader from "./BlogSubComponents/blogheader.component";
import MainFeaturedPost from "./BlogSubComponents/mainFeaturedPost.component";
import FeaturedPost from "./BlogSubComponents/featuredPost.component";
// import BlogPost from "./BlogSubComponents/BlogPost.component";
import PostButton from "./BlogSubComponents/createPostButton.component";
import SideBar from "./BlogSubComponents/sidebar.component";
const Blog = (props) => {
  return (
    <Container className="container" maxWidth="lg">
      <BlogHeader />
      <MainFeaturedPost />
      <Grid container direction="row" spacing={4}>
        <FeaturedPost />
        <FeaturedPost />
      </Grid>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={8}>
          <PostButton />
        </Grid>
        <Grid item xs>
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Blog;
