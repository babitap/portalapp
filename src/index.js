import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Provider } from "react-redux";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "semantic-ui-css/semantic.min.css";
import {App} from "./App";
import configureStore from "./store/configureStore";

export const store = configureStore();
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
document.head.appendChild(styleLink);
ReactDOM.render(
  <React.StrictMode className="app-container">
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

