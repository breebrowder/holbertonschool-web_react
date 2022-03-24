import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return(
    <Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className={css(style.loginContainerInput)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className={css(style.loginContainerInput)}/>
        <button>OK</button>
      </div>
    </Fragment>
  );
}

const style = StyleSheet.create({
  loginContainerInput: {
    margin: '1rem',
  }
});

export default Login;
