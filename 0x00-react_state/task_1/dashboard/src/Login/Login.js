import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.state = {
      isLoggedIn: false, email: '', password: '', enableSubmit: false
    };
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    }, () => {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({ enableSubmit: true })
      }
    })
  }

  handleChangePassword(event) {
    const value = event.target.value;
    const { email } = this.state;
    const enable = email.length > 0 && value.length > 0;
    this.setState({ password: value, enableSubmit: enable });
  }

  render() {
    const { email, password, enableSubmit } = this.state
    return (
      <React.Fragment>
        <div className={css(styles.mobileContainer)}>
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={email}
              onChange={this.handleChangeEmail}
              className={css(styles.loginInput, styles.mobileLogin)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChangePassword}
              className={css(styles.loginInput, styles.mobileLogin)}
            />
            <input
              type="submit"
              value="OK"
              onSubmit={this.handleLoginSubmit}
              className={css(styles.loginButton)}
              disabled={!enableSubmit}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  loginInput: {
    marginRight: '20px',
    marginLeft: '20px',
  },
  mobileContainer: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginTop: '10px',
    }
  },
  mobileLogin: {
    '@media (max-width: 900px)': {
      width: '30%',
      display: 'flex',
      flexDirection: 'block',
      marginRight: '0px',
      marginLeft: '0px',
      marginTop: '10px',
      marginBottom: '10px'
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