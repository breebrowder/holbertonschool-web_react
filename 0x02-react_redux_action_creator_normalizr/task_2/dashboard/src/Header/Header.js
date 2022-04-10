import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/Holberton_logo.jpg';


function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.appLogo)} alt='logo' />
      <h1 className={css(styles.appHeaderH1)}>School dashboard</h1>
    </header>
  )
}

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#fff',
    borderBottom: '3px solid #E0434C',
    height: '200px',
    display: 'flex'

  },
  appLogo: {
    width: '160px',
    height: '160px',
  },
  appHeaderH1: {
    display: 'inline',
    position: 'relative',
    color: '#E0434C',
    fontWeight: '600',
    marginTop: '70px'
  }
});

export default Header;
