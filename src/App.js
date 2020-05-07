import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
} from "@mui-treasury/layout";
import { defaultLayoutPreset } from "@mui-treasury/layout/presets";
import NavContentEx from "./components/Layout/NavContentEx";
import NavHeaderEx from "./components/Layout/NavHeaderEx";
import HeaderEx from "./components/Layout/HeaderEx";
import ContentEx from "./components/Layout/ContentEx";
import FooterEx from "./components/Layout/FooterEx";
export function App() {
  const [data] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true,
  });
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
              {data.header && <HeaderEx />}
            </Toolbar>
          </Header>
          <Content>
            <Switch>
              <Route path="/" exact>
                {data.content && <ContentEx />}
              </Route>
            </Switch>
          </Content>
          <Sidebar>
            {({ collapsed }) => (
              <>
                <NavHeaderEx collapsed={collapsed} />
                <div className={sidebarStyles.container}>
                  {data.nav && <NavContentEx />}
                </div>
                <CollapseBtn className={sidebarStyles.collapseBtn}>
                  <CollapseIcon />
                </CollapseBtn>
              </>
            )}
          </Sidebar>
          <Footer>{data.footer && <FooterEx />}</Footer>
        </>
      )}
    </Root>
  );
}
