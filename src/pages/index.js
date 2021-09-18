import React from 'react';
import '../styles/main.scss';
import Scene from '../components/scene/';
import { graphql, useStaticQuery } from 'gatsby';

// markup
const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      bake2: file(relativePath: { eq: "bakes/bake2.jpg" }) {
        childImageSharp {
          fixed(height: 4096, width: 4096, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake3: file(relativePath: { eq: "bakes/bake3.jpg" }) {
        childImageSharp {
          fixed(height: 4096, width: 4096, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake4: file(relativePath: { eq: "bakes/bake4.jpg" }) {
        childImageSharp {
          fixed(height: 4096, width: 4096, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake5: file(relativePath: { eq: "bakes/bake5.jpg" }) {
        childImageSharp {
          fixed(height: 4096, width: 4096, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake6: file(relativePath: { eq: "bakes/bake6.jpg" }) {
        childImageSharp {
          fixed(height: 4096, width: 4096, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake7: file(relativePath: { eq: "bakes/bake7.jpg" }) {
        childImageSharp {
          fixed(height: 1024, width: 1024, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake8: file(relativePath: { eq: "bakes/bake8.jpg" }) {
        childImageSharp {
          fixed(height: 4096, width: 4096, quality: 100, jpegQuality: 100) {
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
