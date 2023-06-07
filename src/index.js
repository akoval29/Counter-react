import React from "react";
import { createRoot } from "react-dom/client";
import "./style/style.css";

import { TenClass } from "../src/js/tenClassComp.js";
import { TenFunc } from "../src/js/tenFuncComp.js";

const root = document.getElementById("app");

createRoot(root).render(
  <section className="counter">
    <TenClass />
    <TenFunc />
  </section>
);
