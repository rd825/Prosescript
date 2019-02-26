import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";
import createHistory from "history/createBrowserHistory";

import "./reset.css";
import "./index.css";
import App from "./App";

ReactGA.initialize("UA-135248853-1", {
  debug: false, // sends feedback to the console
  titleCase: false,
  userId: 135248853,
  siteSpeedSampleRate: 100 // rate at which data is sent, default is 1
});

const history = createHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
