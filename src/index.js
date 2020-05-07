import React, { useState } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
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
  SidebarTriggerIcon
} from "@mui-treasury/layout";
import { defaultLayoutPreset } from "@mui-treasury/layout/presets";

import NavContentEx from "./components/NavContentEx";
import NavHeaderEx from "./components/NavHeaderEx";
import HeaderEx from "./components/HeaderEx";
import ContentEx from "./components/ContentEx";
import FooterEx from "./components/FooterEx";

import "./styles.css";

// add presets.create{}() to config props in Root to change the behavior, looking and layout
// <Root config={presets.createCozyLayout()}> ...
function App() {
  const [loading] = useState(false);
  const [] = useState("createStandardLayout");
  const [data] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  return loading ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant={"h2"}>Changing Preset...</Typography>
    </div>
  ) : (
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
          <Content>{data.content && <ContentEx />}</Content>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
