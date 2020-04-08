import React from "react";
import "./blog.styles.css";
import { Grid, Container } from "@material-ui/core";
import BlogHeader from "./BlogSubComponents/blogheader.component";
import MainFeaturedPost from "./BlogSubComponents/mainFeaturedPost.component";
import FeaturedPost from "./BlogSubComponents/featuredPost.component";
import PostField from "./BlogSubComponents/postsField.component";
import CreatePost from "./BlogSubComponents/createPostButton.component";
import Post from "./BlogSubComponents/post.component";
import SideBar from "./BlogSubComponents/sidebar.component";
import { fetchPostStartAsync } from "../../redux/post/post.action";
import {
  selectIsPostsFetching,
  selectPostsData,
  selectPostsLoaded,
} from "../../redux/post/post.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "./withSpinner.component";
class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const { fetchPostStartAsync } = this.props;
    fetchPostStartAsync();
  }
  render() {
    const { posts, isFetching, postsLoaded } = this.props;
    // console.log(posts, isFetching);
    const PostsWithSpinner = WithSpinner(PostField);
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
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <CreatePost />
              </Grid>
              <Grid item>
                <PostsWithSpinner posts={posts} isLoading={!postsLoaded} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <SideBar />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
const mapStateToprops = createStructuredSelector({
  isFetching: selectIsPostsFetching,
  posts: selectPostsData,
  postsLoaded: selectPostsLoaded,
});
const mapDispatchStateToProps = (dispatch) => ({
  fetchPostStartAsync: () => dispatch(fetchPostStartAsync()),
});
export default connect(mapStateToprops, mapDispatchStateToProps)(Blog);
