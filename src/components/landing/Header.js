import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../img/logo.svg';
import useStore from '../../store';

const Header = () => {
  const isSmallMobile = useMediaQuery({ maxWidth: '760px' });

  return (
    <header id='header'>
      {isSmallMobile ? (
        <img src={logo} alt='Beresford Design logo' />
      ) : (
        <h2>beresford design</h2>
      )}

      <nav>
        <ul>
          <li>about</li>
          <li>contact</li>
          <li>works</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
