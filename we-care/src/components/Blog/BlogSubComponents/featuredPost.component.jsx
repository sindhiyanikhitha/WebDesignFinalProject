import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flex: "1"
  },
  media: {
    width: "150px",
    height: "150px"
  }
}));
const FeaturedPost = props => {
  const classes = useStyles();
  const { post } = props;
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#" style={{ textDecoration: "none" }}>
        <Card variant="outlined">
          <div className={classes.root}>
            <div className={classes.content}>
              <CardContent>
                <Typography component="h2" variant="h5" gutterBottom>
                  post.title
                </Typography>
                <Typography variant="body1" paragraph gutterBottom>
                  this is some random text
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1584996608697-de5c757725f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            ></CardMedia>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
export default FeaturedPost;
