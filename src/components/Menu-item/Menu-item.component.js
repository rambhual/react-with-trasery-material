import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
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
  cta: {
    display: "block",
    textAlign: "center",
    color: "#fff",
    letterSpacing: "3px",
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: "#fff",
    letterSpacing: "2px",
    border: "3px solid #efe9e9",
    padding: "5px",
  },
}));

const MenuItem = ({ title, imageUrl }) => {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={imageUrl} />
      <CardActionArea>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={200}
          color={"common.white"}
          textAlign={"center"}
        >
          <h1 className={styles.title}>{title}</h1>
        </Box>
      </CardActionArea>
    </Card>
  );
};
export default MenuItem;
