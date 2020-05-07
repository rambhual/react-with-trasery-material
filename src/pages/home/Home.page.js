import React, { useContext, Fragment } from "react";
import { DirectoryContext } from "../../context/directory";
import MenuItem from "../../components/Menu-item/Menu-item.component";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const { directory } = useContext(DirectoryContext);
  console.log(directory);

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {directory.map(({ id, ...otherProps }) => (
            <Grid item xs={4} key={id}>
              <MenuItem {...otherProps} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default HomePage;
