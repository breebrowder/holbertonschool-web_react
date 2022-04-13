import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login(){
  return (
    <React.Fragment>
      <div className={css(styles.mobileContainer)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className={css(styles.loginInput, styles.mobileLogin)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className={css(styles.loginInput, styles.mobileLogin)}/>
        <button className={css(styles.loginButton)}>OK</button>
      </div>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  loginInput: {
    marginRight: '10px',
    marginLeft: '10px',
  },
  mobileContainer: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }
  },
  mobileLogin: {
    '@media (max-width: 900px)': {
      width: '30%',
      margin: '10px 0',
  }
  },
  loginButton: {
    '@media (max-width: 900px)': {
        width: '50px',
        margin: '10px 0'
  }
  }
});

export default Login;
