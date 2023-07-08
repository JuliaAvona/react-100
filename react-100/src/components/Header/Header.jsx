import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="https://cryptologos.cc/logos/uniswap-uni-logo.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
