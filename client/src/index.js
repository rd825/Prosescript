import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./reset.css";
import "./index.css";
import App from "./App";

const injectGA = () => {
  if (typeof window == "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "UA-135248853-1");
};

ReactDOM.render(
  <Router>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-135248853-1"
    />
    <script>{injectGA()}</script>
    <App />
  </Router>,
  document.getElementById("root")
);
