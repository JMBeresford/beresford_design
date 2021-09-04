/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { DoubleSide, sRGBEncoding } from 'three';
import { useGLTF, useTexture, OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Pane } from 'tweakpane';

import baked2 from './bake2.png';
import baked3 from './bake3.png';
import baked4 from './bake4.png';
import baked5 from './bake5.png';
import baked6 from './bake6.png';
import baked7 from './bake7.png';
import baked8 from './bake8.png';

export default function Model(props) {
  const pane = new Pane();

  const emissionColors = {
    blueBox: '#0000ff',
    pinkBox: '#ff00ff',
    yellowBox: '#ffff00',
    shelving: '#ffffff',
    orangeLamp: '#ffffff',
    purpleLamp: '#ffffff',
    pinkLamp: '#ffffff',
  };

  const femissions = pane.addFolder({
    title: 'Emissions',
    expanded: true,
  });

  femissions.addInput(emissionColors, 'blueBox').on('change', (ev) => {
    console.log(group.current);
    emissionColors.blueBox = ev.value;
  });

  const myCamera = useThree((state) => state.camera);
  const controls = useRef();

  const bakedTex2 = useTexture(baked2);
  const bakedTex3 = useTexture(baked3);
  const bakedTex4 = useTexture(baked4);
  const bakedTex5 = useTexture(baked5);
  const bakedTex6 = useTexture(baked6);
  const bakedTex7 = useTexture(baked7);
  const bakedTex8 = useTexture(baked8);

  bakedTex2.flipY = false;
  bakedTex3.flipY = false;
  bakedTex4.flipY = false;
  bakedTex5.flipY = false;
  bakedTex6.flipY = false;
  bakedTex7.flipY = false;
  bakedTex8.flipY = false;

  const group = useRef();
  const { nodes, materials } = useGLTF('beresford_design.glb');
  const screenColor = 0xf1f6f9;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.mac_pro_emissive.geometry}
        position={[0.86955, 0.30488, -0.54437]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.phone_emissive.geometry}
        position={[0.01893, 0.78195, -0.80597]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.monitor_emissive.geometry}
        position={[0.34019, 1.12988, -0.91913]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.ipad_emissive001.geometry}
        position={[-1.33327, 1.38233, -0.77324]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.ipad_emissive002.geometry}
        position={[-0.90973, 0.98622, -0.77324]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.ipad_emissive.geometry}
        position={[-1.33327, 0.6179, -0.77324]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.email_emissive.geometry}
        position={[-1.43596, 1.74085, -0.82356]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.insta_emissive.geometry}
        position={[-1.43596, 1.74085, -0.82356]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.linkedin_emissive.geometry}
        position={[-1.43596, 1.74085, -0.82356]}
      >
        <meshBasicMaterial color={emissionColors.blueBox} />
      </mesh>
      <mesh
        geometry={nodes.lamp_emissive001.geometry}
        position={[1.64366, 1.49129, -0.5674]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.lamp_emissive002.geometry}
        position={[1.76268, 1.68457, -0.86984]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.lamp_emissive.geometry}
        position={[1.29815, 1.58371, -0.85573]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.table_emissive.geometry}
        position={[1.19391, 0.46596, -0.72178]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.shelving_emissive.geometry}
        position={[-1.1789, 0.51015, -0.87188]}
      >
        <meshBasicMaterial color={screenColor} />
      </mesh>
      <mesh
        geometry={nodes.bake2.geometry}
        position={[0.99771, 0.87454, -1.053]}
      >
        <meshBasicMaterial map={bakedTex2} />
      </mesh>
      <mesh
        geometry={nodes.bake3.geometry}
        position={[0.86468, 0.35838, -0.66076]}
      >
        <meshBasicMaterial map={bakedTex3} />
      </mesh>
      <mesh
        geometry={nodes.bake4.geometry}
        position={[1.19391, 0.46596, -0.72178]}
      >
        <meshBasicMaterial map={bakedTex4} />
      </mesh>
      <mesh
        geometry={nodes.bake5.geometry}
        position={[-1.43596, 1.74085, -0.82356]}
      >
        <meshBasicMaterial map={bakedTex5} />
      </mesh>
      <mesh
        geometry={nodes.bake6.geometry}
        position={[-1.1789, 0.51015, -0.87188]}
      >
        <meshBasicMaterial map={bakedTex6} roughness={1} />
      </mesh>
      <mesh
        geometry={nodes.bake7.geometry}
        position={[1.62294, 1.49388, -0.73567]}
      >
        <meshBasicMaterial map={bakedTex7} side={DoubleSide} />
      </mesh>
      <mesh
        geometry={nodes.bake8.geometry}
        position={[-0.00089, 0.03133, 0.70172]}
      >
        <meshBasicMaterial map={bakedTex8} />
      </mesh>

      <OrbitControls camera={myCamera} ref={controls} />
    </group>
  );
}

useGLTF.preload('/beresford_design.glb');