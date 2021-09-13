import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useStore from './scene/store';

const LoadingScreen = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

  const loaded = useStore((state) => state.loaded);

  return (
    <div className={`${loaded ? 'loadingScreen disappear' : 'loadingScreen'}`}>
      <div className='imgWrapper'>
        <img
          className='logo'
          src={data.logo.publicURL}
          alt='Beresford Design Logo'
        />
      </div>

      <h2>LOADING</h2>
    </div>
  );
};

export default LoadingScreen;
