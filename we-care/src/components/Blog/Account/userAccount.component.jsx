import React from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

// import { selectPostsByUser } from "../../../redux/post/post.selectors";
import { selectPostsLoaded } from "../../../redux/post/post.selectors";
import { selectIsFetchingLikes } from "../../../redux/like/like.selectors";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../withSpinner.component";
import PostField from "../BlogSubComponents/postsField.component";
import { withStyles } from "@material-ui/core/styles";
import { getPostsByUserAsync } from "../../../redux/postsByUser/userPosts.actions";
import {
  selectPostsByUser,
  selectIsLoadingPostsByUser,
} from "../../../redux/postsByUser/userPosts.selector";
const styles = (theme) => ({
  root: {
    marginTop: 20,
  },
  post: {
    minWidth: 700,
  },
});
class UserAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditingPost: false,
      isEditingComment: false,
      postText: "",
      commentText: "",
    };
  }
  async componentDidMount() {
    const { getPostsByUserAsync } = this.props;
    await getPostsByUserAsync();
  }
  render() {
    const PostWithSpinner = WithSpinner(PostField);
    const { classes } = this.props;
    const { postsByUser, isLoadingPostsByUser } = this.props;
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Grid item md={8} className={classes.post}>
          <Typography variant="h5">Posts:</Typography>
          <PostWithSpinner
            posts={postsByUser}
            onClick
            isLoading={!isLoadingPostsByUser}
          />
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  postsByUser: selectPostsByUser,
  isLoadingPostsByUser: selectIsLoadingPostsByUser,
});
const mapDispatchStateToProps = (dispatch) => ({
  getPostsByUserAsync: () => dispatch(getPostsByUserAsync()),
});
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchStateToProps)(UserAccount)
);
