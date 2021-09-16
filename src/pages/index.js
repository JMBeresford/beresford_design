import React from 'react';
import '../styles/main.scss';
import Scene from '../components/scene/';
import { graphql, useStaticQuery } from 'gatsby';

// markup
const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      bake2: file(relativePath: { eq: "bakes/bake2.png" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake3: file(relativePath: { eq: "bakes/bake3.png" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake4: file(relativePath: { eq: "bakes/bake4.png" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake5: file(relativePath: { eq: "bakes/bake5.png" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake6: file(relativePath: { eq: "bakes/bake6.png" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake7: file(relativePath: { eq: "bakes/bake7.png" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake8: file(relativePath: { eq: "bakes/bake8.png" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      logo: file(relativePath: { eq: "logo_transparent.png" }) {
        childImageSharp {
          fixed(height: 500, width: 491, quality: 100, jpegQuality: 100) {
            src
          }
        }
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
