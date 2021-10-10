import React, { useRef } from 'react';
import { shaderMaterial } from '@react-three/drei';
import { extend, useThree, useFrame } from '@react-three/fiber';
import skyVertexShader from '../../../shaders/sky/vertex.glsl';
import skyFragmentShader from '../../../shaders/sky/fragment.glsl';
import { Vector2, Color } from 'three';

const SkyMaterial = shaderMaterial(
  { uTime: 0, uResolution: new Vector2(0, 0), uColor: new Color(1, 0, 0) },
  skyVertexShader,
  skyFragmentShader
);

extend({ SkyMaterial });

const Sky = (props) => {
  const { size } = useThree();
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={ref} {...props}>
      <planeGeometry args={[200, 200]} />
      <skyMaterial uColor={'#34252f'} uResolution={[size.width, size.height]} />
    </mesh>
  );
};

export default Sky;
