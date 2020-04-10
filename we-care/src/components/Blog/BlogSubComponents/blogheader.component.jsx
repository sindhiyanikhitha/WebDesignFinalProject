import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { spacing } from "@material-ui/system";
import { selectUser } from "../../reducers/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./blogheader.styles.css";
const BlogHeader = (props) => {
  const { user } = props;
  return (
    <Grid container direction="row" className="header">
      <Grid item md style={{ paddingLeft: "24px" }}>
        <Link to="#">SUBSCRIBE</Link>
      </Grid>
      <Grid item md={6} style={{ textAlign: "center" }}>
        <h5>BLOG</h5>
      </Grid>
      <Grid item md style={{ paddingRight: "24px", textAlign: "end" }}>
        <Link to="/account">Account</Link>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = createStructuredSelector({
  user: selectUser,
});
export default connect(mapStateToProps)(BlogHeader);
