import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Callback from './components/Callback';

const clientId = '575987a2325a';
const state = 'opensesame';
const redirectUri = 'https://prosescript.netlify.com/callback'
const url = `https://medium.com/m/oauth/authorize?client_id=${clientId}&scope=basicProfile,publishPost&state=${state}&response_type=code&redirect_uri=${redirectUri}`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav signup={url}/>
        <Route exact path="/" render={props => <Home {...props} signup={url}/>} />
        <Route exact path="/about" render={props => <About {...props} signup={url}/>} />
        <Route path="/callback" render={props => <Callback {...props} />} />
      </div>
    );
  }
}

export default App;
