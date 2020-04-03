import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "reset-css";
import App from "./App";
import "./stylesheets/common.scss";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("pivo"));
