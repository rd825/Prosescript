import React, { Component } from "react";
import { Route } from "react-router-dom";
import ReactGA from "react-ga";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Callback from "./components/Callback";

const clientId = "910cc0297d37";
const state = "opensesame";
const redirectUri = "https://prosescript.netlify.com/callback";
const url = `https://medium.com/m/oauth/authorize?client_id=${clientId}&scope=basicProfile,publishPost&state=${state}&response_type=code&redirect_uri=${redirectUri}`;

ReactGA.initialize("UA-135248853-1", {
  debug: false, // sends feedback to the console
  titleCase: false,
  userId: 135248853,
  siteSpeedSampleRate: 100 // rate at which data is sent, default is 1
});
ReactGA.pageview(`${window.location.pathname}`);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav signup={url} />

        <Route
          exact
          path="/"
          render={props => <Home {...props} signup={url} />}
        />
        <Route
          path="/about"
          render={props => <About {...props} signup={url} />}
        />
        <Route path="/callback" render={props => <Callback {...props} />} />
      </div>
    );
  }
}

export default App;
