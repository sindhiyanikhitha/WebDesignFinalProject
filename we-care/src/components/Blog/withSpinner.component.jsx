import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
const WithSpnner = (Component) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? <Component {...otherProps} /> : <CircularProgress />;
  };
};
export default WithSpnner;
