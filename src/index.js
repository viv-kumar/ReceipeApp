import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from "./app/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
   <Auth0Provider
    domain="dev-hbly37xxpxc0c8km.us.auth0.com"
    clientId="dYubOhXYCttOeMjQ5p4Iu82T1nCIdEuS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Auth0Provider>,
  </Provider>,
  document.getElementById("root")
);
{
  <script
    src="https://kit.fontawesome.com/9525d477a8.js"
    crossOrigin="anonymous"
  ></script>;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
