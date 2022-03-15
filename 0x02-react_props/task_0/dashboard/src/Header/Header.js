import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function App() {
    return (
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1>School dashboard</h1>
        </header>
    );
}