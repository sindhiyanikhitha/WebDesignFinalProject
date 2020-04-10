import React from "react";
import "./blog.styles.css";
import { Grid, Container } from "@material-ui/core";
import BlogHeader from "./BlogSubComponents/blogheader.component";
import MainFeaturedPost from "./BlogSubComponents/mainFeaturedPost.component";
import FeaturedPost from "./BlogSubComponents/featuredPost.component";
import PostField from "./BlogSubComponents/postsField.component";
import CreatePost from "./BlogSubComponents/createPostButton.component";
import SideBar from "./BlogSubComponents/sidebar.component";
import { fetchPostStartAsync } from "../../redux/post/post.action";
import {
  selectIsPostsFetching,
  selectPostsData,
  selectPostsLoaded,
} from "../../redux/post/post.selectors";
import { selectIsFetchingLikes } from "../../redux/like/like.selectors";
import { getLikesAync } from "../../redux/like/like.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "./withSpinner.component";
class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const { fetchPostStartAsync, getLikesAync } = this.props;
    fetchPostStartAsync();
    // Get All posts this user liked
    getLikesAync();
  }
  render() {
    const { posts, isFetching, postsLoaded, isFetchingLikes } = this.props;
    // console.log("fetchingLikes", isFetchingLikes);
    // console.log("likes", postsLiked);
    const PostsWithSpinner = WithSpinner(PostField);
    const social = {
      Facebook: { name: "Facebook", link: "https://www.facebook.com/" },
      LinkedIn: {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/trivedhaudurthi/",
      },
      Twitter: {
        name: "Twitter",
        link: "https://twitter.com/home",
      },
    };
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
                <PostsWithSpinner
                  posts={posts}
                  isLoading={!(postsLoaded && isFetchingLikes)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <SideBar social={social} />
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
  isFetchingLikes: selectIsFetchingLikes,
});
const mapDispatchStateToProps = (dispatch) => ({
  fetchPostStartAsync: () => dispatch(fetchPostStartAsync()),
  getLikesAync: () => dispatch(getLikesAync()),
});
export default connect(mapStateToprops, mapDispatchStateToProps)(Blog);
