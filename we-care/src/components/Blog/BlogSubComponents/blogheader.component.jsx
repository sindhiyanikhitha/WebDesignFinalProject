import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { spacing } from "@material-ui/system";
import "./blogheader.styles.css";
const BlogHeader = props => {
  return (
    <Grid container direction="row" className="header">
      <Grid item md style={{ paddingLeft: "24px" }}>
        <Link to="#">SUBSCRIBE</Link>
      </Grid>
      <Grid item md={6} style={{ textAlign: "center" }}>
        <h5>BLOG</h5>
      </Grid>
      <Grid item md style={{ paddingRight: "24px", textAlign: "end" }}>
        <Link to="#">SIGNUP</Link>
      </Grid>
    </Grid>
  );
};
export default BlogHeader;
