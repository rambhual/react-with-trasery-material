import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CollectionPreview from "../Collection-preview";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const CollectionItem = ({ title, items }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4">{title}</Typography>
      </Box>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {items
            .filter((item, idx) => idx < 3)
            .map(({ id, ...otherProps }) => (
              <Grid item xs={4} key={id}>
                <CollectionPreview {...otherProps} />
              </Grid>
            ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default CollectionItem;
