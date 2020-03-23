import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Home from "./Home";
// import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Home />, document.getElementById("root"));
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// ReactDOM.render(
//   <div>{/* <p>Hello</p>
//     <h1>hello</h1> */}</div>,
//   document.querySelector("#root")
// );
ReactDOM.render(app, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
