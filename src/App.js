import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import BootNavBar from './components/bootnavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BootNavBar />
      </div>
    );
  }
}

export default App;
