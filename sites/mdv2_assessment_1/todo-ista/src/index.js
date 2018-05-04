import React from "react";
import ReactDOM from "react-dom";
import 'grommet/grommet.min.css';
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import TodoistaAppRouter from "./components/TodoistaAppRouter";

ReactDOM.render(
  <TodoistaAppRouter/>, document.getElementById("root"));
registerServiceWorker();
