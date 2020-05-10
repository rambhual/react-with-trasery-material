import React, { Component } from "react";
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
import Authentication from "./pages/auth/auth.page";
import { auth, createUserProfileDocument } from "./firebase";

class App extends Component {
  unSubscribe = null;
  state = {
    currentUser: null,
  };
  componentDidMount() {
    this.unSubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapData) => {
          this.setState({
            currentUser: { id: snapData.id, ...snapData.data() },
          });
        });
      }
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unSubscribe();
  }
  render() {
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
                <HeaderEx currentUser={this.state.currentUser} />
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
                  <Route path="/auth/login" exact>
                    <Authentication />
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
}

export default App;
