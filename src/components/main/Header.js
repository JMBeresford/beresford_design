import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../img/logo.svg';

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
          <li>
            <a href='about'>about</a>
          </li>
          <li>
            <a href='contact'>contact</a>
          </li>
          <li>
            <a href='works'>works</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
