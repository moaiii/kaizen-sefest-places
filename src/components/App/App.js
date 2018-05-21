// @flow
// to use in VS CODE: set javascript.validate.enable option to false
import React, { Component } from 'react';

type Props = {};

type State = {};

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;