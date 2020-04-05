import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  TextField,
  Fab,
  Typography,
  InputAdornment,
  IconButton,
  Popover,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    maxWidth: "90%",
  },
});
class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
    };
  }
  render() {}
}
export default withStyles(styles)(Post);
