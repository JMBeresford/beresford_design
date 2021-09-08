import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h2 onClick={props.handleInteract} onWheel={props.handleInteract}>
        beresford design
      </h2>

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
