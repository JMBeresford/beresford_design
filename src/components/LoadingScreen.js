import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const LoadingScreen = (props) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <div
      className={`${
        props.loaded ? 'loadingScreen disappear' : 'loadingScreen'
      }`}
    >
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
