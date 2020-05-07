import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  Root,
  Header,
  Sidebar,
  Content,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
} from "@mui-treasury/layout";
import { defaultLayoutPreset } from "@mui-treasury/layout/presets";
import NavContentEx from "./components/Layout/NavContentEx";
import NavHeaderEx from "./components/Layout/NavHeaderEx";
import HeaderEx from "./components/Layout/HeaderEx";
import Home from "./pages/home";
import { Container } from "@material-ui/core";
import { ShopPage } from "./pages/shop/Shop.page";
export function App() {
  return (
    <Root config={defaultLayoutPreset}>
      {({ headerStyles, sidebarStyles }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <CollapseBtn
                component={IconButton}
                className={headerStyles.leftTrigger}
              >
                <CollapseIcon />
              </CollapseBtn>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              <HeaderEx />
            </Toolbar>
          </Header>
          <Content>
            <Container>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/shops" exact>
                  <ShopPage />
                </Route>
              </Switch>
            </Container>
          </Content>
          <Sidebar>
            {({ collapsed }) => (
              <>
                <NavHeaderEx collapsed={collapsed} />
                <div className={sidebarStyles.container}>
                  <NavContentEx />
                </div>
                <CollapseBtn className={sidebarStyles.collapseBtn}>
                  <CollapseIcon />
                </CollapseBtn>
              </>
            )}
          </Sidebar>
        </>
      )}
    </Root>
  );
}
