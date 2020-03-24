import React from "react";
import "./blog.styles.css";
import { Grid, Container } from "@material-ui/core";
import BlogHeader from "./BlogSubComponents/blogheader.component";
import MainFeaturedPost from "./BlogSubComponents/mainFeaturedPost.component";
import FeaturedPost from "./BlogSubComponents/featuredPost.component";
const Blog = props => {
  return (
    <Container className="container" maxWidth="lg">
      <BlogHeader />
      <MainFeaturedPost />
      <Grid container direction="row" spacing={4}>
        <FeaturedPost />
        <FeaturedPost />
      </Grid>
    </Container>
  );
};
export default Blog;
