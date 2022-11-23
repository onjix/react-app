import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import M1 from "./M1";
import M2 from "./M2";
import M3 from "./M3";
import M4 from "./M4";
import M5 from "./M5";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/rexplain/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="M1" element={<M1 />} />
      <Route path="M2" element={<M2 />} />
      <Route path="M3" element={<M3 />} />
      <Route path="M4" element={<M4 />} />
      <Route path="M5" element={<M5 />} />
    </Routes>
  </Router>
);
