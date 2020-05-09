import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { useStyles } from "./Collection-preview.styles";

const CollectionPreview = ({ name, imageUrl, price }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageUrl} title={name} />

      <CardActions className={classes.cardActions}>
        <div className={classes.actions}>
          <h4 className={classes.name.substring(0, 15)}> {name}</h4>
          <h4 className={classes.price}>${price}</h4>
        </div>
      </CardActions>
    </Card>
  );
};
export default CollectionPreview;
