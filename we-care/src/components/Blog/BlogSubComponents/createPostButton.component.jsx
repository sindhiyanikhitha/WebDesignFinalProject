import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  TextField,
  Fab,
  Chip,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
  },
  title: {
    fontWeight: "bold",
  },
  fab: {
    marginTop: 15,
    boxShadow: "none",
    cursor: "pointer",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  uploadButtonWrappaer: {
    position: "relative",
    overflow: "hidden",
    display: "inline-block",
  },
  fileInput: {
    position: "absolute",
    opacity: 0,
    left: 0,
    top: 0,
    marginTop: 15,
    cursor: "pointer",
  },
  chip: {
    marginTop: 15,
    marginLeft: 20,
  },
  flexItems: {
    display: "flex",
    justifyContent: "space-between",
  },
  fileInputBlock: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const PostButton = (props) => {
  const classes = useStyles();
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
            Create Post
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <form>
          <TextField placeholder="What's on your mind, User?" fullWidth />
          <div className={classes.flexItems}>
            <div className={classes.fileInputBlock}>
              <div className={classes.uploadButtonWrappaer}>
                <Fab variant="extended" size="small" className={classes.fab}>
                  <AddPhotoAlternateRoundedIcon
                    className={classes.extendedIcon}
                  />
                  Photo
                </Fab>
                <input type="file" className={classes.fileInput} />
              </div>
              <Chip variant="outlined" label="Basic" className={classes.chip} />
            </div>

            <Fab
              variant="extended"
              size="small"
              className={classes.fab}
              type="submit"
            >
              <DoneRoundedIcon className={classes.extendedIcon} />
              Post
            </Fab>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
export default PostButton;
