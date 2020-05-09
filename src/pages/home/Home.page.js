import React, { useContext, Fragment } from "react";
import { DirectoryContext } from "../../context/directory";
import MenuItem from "../../components/Menu-item/Menu-item.component";
import Grid from "@material-ui/core/Grid";

const HomePage = () => {
  const { directory } = useContext(DirectoryContext);
  return (
    <Fragment>
      <Grid container spacing={2}>
        {directory.map(({ id, ...otherProps }) => (
          <Grid item xs={4} key={id}>
            <MenuItem {...otherProps} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default HomePage;
