import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting.jsx";
import "./index.css";
import { Needs } from "./Needs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <Needs />
  </React.StrictMode>
);
