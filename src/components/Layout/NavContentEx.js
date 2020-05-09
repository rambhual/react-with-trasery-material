import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

const list = [
  {
    primaryText: "Home",
    icon: "home",
    route: "",
  },
  {
    primaryText: "Shop",
    icon: "people",
    route: "shops",
  },
];

const NavContentEx = () => {
  return (
    <List>
      {list.map(({ primaryText, icon, route }, i) => (
        <ListItem key={primaryText} button component={Link} to={`/${route}`}>
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      ))}
      <Divider style={{ margin: "12px 0" }} />
      <ListItem button component={Link} to="/auth/login">
        <ListItemText
          primary={"Settings & account"}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    </List>
  );
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
