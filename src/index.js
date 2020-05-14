import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import DirectoryProvider from "./context/directory";
import ShopProvider from "./context/shop";
import "./styles.css";
import store from "./state/store";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HashRouter>
        <DirectoryProvider>
          <ShopProvider>
            <App />
          </ShopProvider>
        </DirectoryProvider>
      </HashRouter>
    </BrowserRouter>
  </Provider>,
  rootElement
);
