import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
}));
const Authentication = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <SignIn />
        <SignUp />
      </div>
    </Fragment>
  );
};

export default Authentication;
