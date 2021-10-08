import React from 'react';
import styles from '../styles/index.scss';
import Loading from '../components/loading/Loading';
import Landing from '../components/landing/Landing';
global.XMLHttpRequest = require('xhr2');

function Index() {
  return (
    <div className='App'>
      <Loading />
      <Landing />
    </div>
  );
}

export default Index;
