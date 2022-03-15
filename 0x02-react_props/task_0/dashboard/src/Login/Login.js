import React from "react";
import './Login.css';

export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <label>
                Email:
                <input type='email' placeholder='Email' />
            </label>
            <label>
                Password:
                <input type='password' placeholder='Password' />
            </label>
            <button>OK</button>
        </>
    );
}