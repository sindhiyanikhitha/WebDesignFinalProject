import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "emoji-mart/css/emoji-mart.css";
import { withStyles } from "@material-ui/core/styles";

import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import CommentField from "./commentField.component";
const styles = (theme) => ({
  root: {
    maxWidth: "90%",
  },
  title: {
    fontWeight: "bold",
  },
  media: {
    height: 300,
    // paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-around",
  },
});
class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
      isLiked: false,
      isCommenting: false,
      isSharing: false,
    };
  }
  handleLike = (event) => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };
  handleComment = (event) => {
    this.setState({
      isCommenting: !this.state.isCommenting,
    });
  };
  handleShare = (event) => {
    this.setState({
      isSharing: !this.state.isSharing,
    });
  };
  render() {
    const { classes, post } = this.props;
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          }
          title={
            <Typography variant="body1" className={classes.title}>
              {post.user.name}
            </Typography>
          }
        ></CardHeader>
        {post.image ? (
          <CardMedia
            className={classes.media}
            title="newTour"
            image={`/images/posts/${post.image}`}
          ></CardMedia>
        ) : null}
        {post.caption ? (
          <CardContent>
            <Typography variant="body2">{post.caption}</Typography>
          </CardContent>
        ) : null}
        <CardActions className={classes.cardActions}>
          <Button
            variant="text"
            onClick={this.handleLike}
            startIcon={
              <ThumbUpRoundedIcon
                color={this.state.isLiked ? "primary" : "action"}
              />
            }
          >
            Like
          </Button>
          <Button
            variant="text"
            onClick={this.handleComment}
            startIcon={
              <CommentRoundedIcon
                color={this.state.isCommenting ? "primary" : "action"}
              />
            }
          >
            Comment
          </Button>
          <Button
            variant="text"
            onClick={this.handleShare}
            startIcon={
              <ShareRoundedIcon
                color={this.state.isSharing ? "primary" : "action"}
              />
            }
          >
            Share
          </Button>
        </CardActions>
        {this.state.isCommenting ? <CommentField /> : null}
      </Card>
    );
  }
}

export default withStyles(styles)(Post);
