import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Callback from './components/Callback';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/callback" render={props => <Callback {...props} />} />
      </div>
    );
  }
}

export default App;
