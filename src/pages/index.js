import React from 'react';
import '../styles/main.scss';
import Scene from '../components/scene/';
import { graphql, useStaticQuery } from 'gatsby';

// markup
const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      bake2: file(relativePath: { eq: "bakes/bake2.jpg" }) {
        publicURL
      }
      bake3: file(relativePath: { eq: "bakes/bake3.jpg" }) {
        publicURL
      }
      bake4: file(relativePath: { eq: "bakes/bake4.jpg" }) {
        publicURL
      }
      bake5: file(relativePath: { eq: "bakes/bake5.jpg" }) {
        publicURL
      }
      bake6: file(relativePath: { eq: "bakes/bake6.jpg" }) {
        publicURL
      }
      bake7: file(relativePath: { eq: "bakes/bake7.jpg" }) {
        publicURL
      }
      bake8: file(relativePath: { eq: "bakes/bake8.jpg" }) {
        publicURL
      }
      logo: file(relativePath: { eq: "logo_transparent.png" }) {
        publicURL
      }
    }
  `);

  const handlePointerMove = (e) => {
    let el = document.querySelector('.cursor');

    if (el !== null) {
      document.querySelector('.cursorWrapper').style.top = `${e.clientY}px`;
      document.querySelector('.cursorWrapper').style.left = `${e.clientX}px`;
    }
  };

  return (
    <div id='index'>
      <main id='hero' onPointerMove={handlePointerMove}>
        <Scene query={query} />
      </main>
    </div>
  );
};

export default IndexPage;
