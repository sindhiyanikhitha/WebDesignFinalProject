import React from "react";
import { Typography, Link, Grid } from "@material-ui/core";
const SideBar = ({ social, ...otherProps }) => (
  <Grid item xs={12} md={6}>
    {/* {
            Object.keys(social).map(el=>(
                <Link href={social[el].link}>{`${social[el].name}`}</Link>
            ))
        } */}
    <Typography variant="h4">Social</Typography>
    <Link href={`social[el].link`}>{`{social[el].name}`}</Link>
    <Link href={`social[el].link`}>{`{social[el].name}`}</Link>
    <Link href={`social[el].link}`}>{`{social[el].name}`}</Link>
  </Grid>
);
export default SideBar;
