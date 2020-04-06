import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  TextField,
  Typography,
  InputAdornment,
  Popover,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { withStyles } from "@material-ui/core/styles";
import newtour from "../../../assets/images/newtour.jpg";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
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
    const { classes } = this.props;
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
              User Name
            </Typography>
          }
        ></CardHeader>
        <CardMedia
          className={classes.media}
          image={newtour}
          title="newTour"
        ></CardMedia>
        <CardContent>
          <Typography variant="body2">
            An incredible tour with lots of fun and adventures 😍
          </Typography>
        </CardContent>
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
      </Card>
    );
  }
}
export default withStyles(styles)(Post);
