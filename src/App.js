import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sticky from './components/sticky'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
         <div>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
          <p>Up</p>
         </div>
        
        <Sticky />
        
        <div>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          <p>Down</p>
          
        </div>
        </div>
        <footer className="footer">
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
