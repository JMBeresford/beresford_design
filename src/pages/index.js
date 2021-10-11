import React from 'react';
import styles from '../styles/index.scss';
import Loading from '../components/loading/Loading';
import Main from '../components/main/Main';
global.XMLHttpRequest = require('xhr2');

function Index() {
  return (
    <div className='App'>
      {/* <Loading /> */}
      <Main />
    </div>
  );
}

export default Index;
