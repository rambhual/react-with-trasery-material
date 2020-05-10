import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
    borderRadius: 0,
    position: "relative",
  },
  title: {
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const CollectionPreview = ({ name, price, imageUrl }) => {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={imageUrl} />
      <CardActionArea className={styles.title}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={200}
          color={"common.white"}
          textAlign={"center"}
        >
          <h1 className={styles.name}>
            {name}
            <div className={styles.price}>${price}</div>
          </h1>
        </Box>
      </CardActionArea>

      <Divider variant="middle" />
      <CardActions className={styles.action}>
        <Button variant="contained" color="primary" className={styles.button}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};
export default CollectionPreview;
