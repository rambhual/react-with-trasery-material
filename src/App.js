import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import { connect } from "react-redux";
import { setCurrentUser } from "./state/user/user-actions";
import { ShopPage } from "./pages/shop/Shop.page";
import Authentication from "./pages/auth/auth.page";
import { auth, createUserProfileDocument } from "./firebase";

class App extends Component {
  unSubscribe = null;
  componentDidMount() {
    this.unSubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapData) => {
          this.props.setCurrentUser({
            id: snapData.id,
            ...snapData.data(),
          });
        });
      }
      this.props.setCurrentUser(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribe();
  }
  render() {
    const { currentUser } = this.props;
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
                  <Route
                    exact
                    path="/auth/login"
                    exact
                    render={() =>
                      currentUser ? <Redirect to="/" /> : <Authentication />
                    }
                  ></Route>
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

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
