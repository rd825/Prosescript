import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Callback from "./components/Callback";
import Container from "./components/Container";
import { Global, css } from "@emotion/core";

const clientId = "575987a2325a";
const state = "opensesame";
const redirectUri = "https://prosescript.netlify.com/callback";
const url = `https://medium.com/m/oauth/authorize?client_id=${clientId}&scope=basicProfile,publishPost&state=${state}&response_type=code&redirect_uri=${redirectUri}`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global
          styles={css`
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 0;
              font-family: "Lato", sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #123;
            }

            code {
              font-family: source-code-pro, Menlo, Monaco, Consolas,
                "Courier New", monospace;
            }

            input,
            select,
            textarea,
            button {
              font-family: inherit;
            }
          `}
        >
          <Container>
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
          </Container>
        </Global>
      </div>
    );
  }
}

export default App;
