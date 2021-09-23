import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../images/logo.svg';

const Header = (props) => {
  const isSmallMobile = useMediaQuery({ maxWidth: '760px' });

  return (
    <header>
      {isSmallMobile ? (
        <img src={logo} alt='Beresford Design logo' />
      ) : (
        <h2 onClick={props.handleInteract} onWheel={props.handleInteract}>
          beresford design
        </h2>
      )}

      <nav>
        <ul>
          <li onClick={props.handleInteract}>about</li>
          <li onClick={props.handleInteract}>contact</li>
          <li onClick={props.handleInteract}>works</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
