import React from 'react';
import logo from '../assets/Holberton_logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';


function App() {
  return (
    <div className="App">

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"/>
        <button>OK</button>
      </div>

      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
