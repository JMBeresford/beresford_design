import React, { Suspense } from 'react';
import logo from '../../img/logo.svg';
import { Canvas, extend } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import vertexShader from '../../shaders/hero/vertex.glsl';
import fragmentShader from '../../shaders/hero/fragment.glsl';
import { sRGBEncoding } from 'three';

const ImageMaterial = shaderMaterial(
  {
    uTexture: null,
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ ImageMaterial });

const Image = () => {
  const logoTex = useTexture(logo);

  return (
    <mesh>
      <planeGeometry args={[1, 1, 1, 1]} />
      <imageMaterial uTexture={logoTex} />
    </mesh>
  );
};

const HeroImage = () => {
  return (
    <div id='heroImg'>
      <Canvas gl={{ outputEncoding: sRGBEncoding }}>
        <Suspense fallback={null}>
          <Image />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroImage;
