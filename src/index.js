import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import DirectoryProvider from "./context/directory";
import ShopProvider from "./context/shop";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <HashRouter>
      <DirectoryProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </DirectoryProvider>
    </HashRouter>
  </BrowserRouter>,
  rootElement
);
