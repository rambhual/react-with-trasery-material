import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  name: {
    width: "50%",
  },
  price: {
    width: "10px",
  },
  cardActions: {
    padding: "0px 25px",
  },
});

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
