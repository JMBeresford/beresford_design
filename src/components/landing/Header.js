import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../img/logo.svg';
import { Link } from 'gatsby';

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
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
          <li>
            <Link to='experience'>works</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
