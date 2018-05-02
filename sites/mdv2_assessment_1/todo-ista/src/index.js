import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoistaApp from "./components/TodoistaApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<TodoistaApp />, document.getElementById("root"));
registerServiceWorker();
