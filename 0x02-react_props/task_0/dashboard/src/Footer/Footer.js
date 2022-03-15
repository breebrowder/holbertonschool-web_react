import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='App-footer'>
            <p>
                Copyright {getFullYear()} - {getFooterCopy(0)}
            </p>
        </footer>
    );
}