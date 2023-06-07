import React from "react";
import ReactDOM from "react-dom";
import "./style/style.css";

import { TenClass } from "../src/js/tenClassComp.js";
import { TenFunc } from "../src/js/tenFuncComp.js";

ReactDOM.render(
  <section className="counter">
    <TenClass />
    <TenFunc />
  </section>,
  document.getElementById("app")
);
