import React from 'react';
import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function App() {
  return (
    <>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label>Email:
          <input type='email' placeholder='Email' />
        </label>
        <label>Password:
          <input type='password' placeholder='Password' />
        </label>
        <button>OK</button>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
      </footer>
    </>
  );
}
