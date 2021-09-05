import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Beresford_design';
import { graphql, useStaticQuery } from 'gatsby';

const Hero = () => {
  const pixelRatio =
    typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  const query = useStaticQuery(graphql`
    query {
      bake2: file(relativePath: { eq: "bake2.jpg" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake3: file(relativePath: { eq: "bake3.jpg" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake4: file(relativePath: { eq: "bake4.jpg" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake5: file(relativePath: { eq: "bake5.jpg" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake6: file(relativePath: { eq: "bake6.jpg" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake7: file(relativePath: { eq: "bake7.jpg" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
      bake8: file(relativePath: { eq: "bake8.jpg" }) {
        childImageSharp {
          fixed(height: 2048, width: 2048, quality: 100, jpegQuality: 100) {
            src
          }
        }
      }
    }
  `);

  return (
    <Canvas
      id='heroCanvas'
      dpr={Math.min(pixelRatio, 2)}
      camera={{ position: [7.815515, 8.291183, 10.41677] }}
      gl={{ alpha: false, antialias: true }}
    >
      <Suspense fallback={null}>
        <Model data={query} />
      </Suspense>
    </Canvas>
  );
};

export default Hero;
