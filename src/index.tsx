import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// to make our store available for all app we add provider on the highest level component
import { Provider } from "react-redux";

// import store to connect to our Provider to wrap all the components into it
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
