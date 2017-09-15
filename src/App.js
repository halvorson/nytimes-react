import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./components/Page";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Page />
      </div>
    );
  }
}

export default App;