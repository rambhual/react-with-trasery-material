import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
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
