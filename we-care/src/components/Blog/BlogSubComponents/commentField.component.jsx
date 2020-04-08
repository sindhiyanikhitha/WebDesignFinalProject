import React from "react";
import {
  Avatar,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SendIcon from "@material-ui/icons/Send";
import Comment from "./comment.component";
const styles = (theme) => ({
  root: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
  comment: {
    display: "flex",
    direction: "row",
  },
  avatar: {
    marginRight: 5,
    marginLeft: 5,
  },
  text: {
    marginRight: 10,
    marginLeft: 5,
  },
});
class CommentField extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  updateText = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2} direction="column">
        <Grid item>
          <form>
            <div className={classes.comment}>
              <Avatar className={classes.avatar}>
                <AccountCircleIcon />
              </Avatar>
              <TextField
                placeholder="What's on your mind, User?"
                fullWidth
                value={this.state.text}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit">
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className={classes.text}
                onChange={this.updateText}
              />
            </div>
          </form>
        </Grid>
        <Grid item>
          <Comment />
        </Grid>
        <Grid item>
          <Comment />
        </Grid>
        <Grid item>
          <Comment />
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(CommentField);
