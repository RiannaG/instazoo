import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Root";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
