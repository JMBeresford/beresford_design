/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import model from './beresford_design.glb';
import useStore from './store';
import { gsap, Power1 } from 'gsap';

export default function Model({ data, ...props }) {
  // REF's
  const group = useRef();
  const monitor = useRef();

  const setLoaded = useStore((state) => state.setLoaded);
  const setHovering = useStore((state) => state.setHovering);
  const setView = useStore((state) => state.setView);
  const view = useStore((state) => state.view);
  const moving = useStore((state) => state.moving);
  const experienceStarted = useStore((state) => state.experienceStarted);

  // LOAD TEXTURES AND CONFIG MATERIALS
  const bakedTex2 = useTexture(data.bake2.childImageSharp.fixed.src);
  const bakedTex3 = useTexture(data.bake3.childImageSharp.fixed.src);
  const bakedTex4 = useTexture(data.bake4.childImageSharp.fixed.src);
  const bakedTex5 = useTexture(data.bake5.childImageSharp.fixed.src);
  const bakedTex6 = useTexture(data.bake6.childImageSharp.fixed.src);
  const bakedTex7 = useTexture(data.bake7.childImageSharp.fixed.src);
  const bakedTex8 = useTexture(data.bake8.childImageSharp.fixed.src);

  const logoTex = useTexture(data.logo.childImageSharp.fixed.src);
  const monitorTex = useTexture(data.logo.childImageSharp.fixed.src);

  bakedTex2.flipY = false;
  bakedTex3.flipY = false;
  bakedTex4.flipY = false;
  bakedTex5.flipY = false;
  bakedTex6.flipY = false;
  bakedTex7.flipY = false;
  bakedTex8.flipY = false;
  logoTex.flipY = false;
  monitorTex.flipY = false;
  logoTex.center.set(0.5, 0.5);
  logoTex.repeat.set(1.6, 1.6);
  monitorTex.center.set(0.5, 0.5);
  monitorTex.repeat.set(2.2, 2.2);

  const emissionColors = {
    email: { r: 255, g: 253, b: 189 },
    instagram: { r: 224, g: 175, b: 255 },
    linkedIn: { r: 164, g: 214, b: 255 },
    github: { r: 255, g: 138, b: 138 },
    orangeLamp: '#ffa42c',
    purpleLamp: '#d187ff',
    pinkLamp: '#ff56d8',
    screens: '#f1f6f9',
    shelving: '#f8c888',
  };

  // pointer event handlers
  const case1Clicked = (e) => {
    if (view === 'case1') {
      return;
    } else {
      setView('case1');
    }
  };

  const case2Clicked = (e) => {
    if (view === 'case2') {
      return;
    } else {
      setView('case2');
    }
  };

  const case3Clicked = (e) => {
    if (view === 'case3') {
      return;
    } else {
      setView('case3');
    }
  };

  const emailClicked = (e) => {
    if (view === 'socials') {
      window.open(
        'mailto:consult@beresforddesign.net?subject=Inquiry From Portfolio'
      );
    } else {
      setView('socials');
    }
  };

  const instaClicked = (e) => {
    if (view === 'socials') {
      window.open('http://instagram.com/beresforddesign/');
    } else {
      setView('socials');
    }
  };

  const linkedinClicked = (e) => {
    if (view === 'socials') {
      window.open('http://linkedin.com/in/JMBeresford');
    } else {
      setView('socials');
    }
  };

  const githubClicked = (e) => {
    if (view === 'socials') {
      window.open('http://github.com/JMBeresford');
    } else {
      setView('socials');
    }
  };

  const handlePointerEnter = (e) => {
    if (moving) {
      return;
    }

    let mesh = e.object;
    setHovering(mesh.userData.name);

    if (view === 'socials' && !moving && mesh.userData.name !== 'case1') {
      gsap.to(mesh.material.color, {
        duration: 0.5,
        r: 1,
        g: 1,
        b: 1,
        ease: 'linear',
      });
    }
  };

  const handlePointerOut = (e) => {
    setHovering(null);
    let mesh = e.object;

    if (view === 'socials' && !moving && mesh.userData.name !== 'case1') {
      let tempColors = mesh.material.color.clone().multiplyScalar(255);

      gsap.to(tempColors, {
        duration: 0.5,
        r: emissionColors[mesh.userData.name].r,
        g: emissionColors[mesh.userData.name].g,
        b: emissionColors[mesh.userData.name].b,
        ease: 'linear',
        onUpdate: () => {
          mesh.material.color.set(
            `rgb(${Math.floor(tempColors.r)},${Math.floor(
              tempColors.g
            )},${Math.floor(tempColors.b)})`
          );
        },
      });
    }
  };

  // EFFECTS
  useEffect(() => {
    setLoaded();
  }, []);

  useEffect(() => {
    if (experienceStarted) {
      gsap.to(monitor.current.material, {
        duration: 1.5,
        opacity: 1,
        ease: Power1.easeOut,
        delay: 1.5,
      });
    }
  }, [experienceStarted]);

  // LOAD GLTF
  const { nodes } = useGLTF(model);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.mac_pro_emissive.geometry}
        position={[0.86955, 0.30488, -0.54437]}
      >
        <meshBasicMaterial color={emissionColors.screens} transparent />
      </mesh>
      <mesh
        geometry={nodes.phone_emissive.geometry}
        position={[0.01893, 0.78195, -0.80597]}
      >
        <meshBasicMaterial color={emissionColors.screens} />
      </mesh>
      <mesh
        geometry={nodes.monitor_emissive.geometry}
        position={[0.34019, 1.12988, -0.91913]}
        ref={monitor}
      >
        <meshBasicMaterial opacity={0} map={monitorTex} />
      </mesh>
      <mesh
        geometry={nodes.ipad_emissive001.geometry}
        position={[-1.33327, 1.38233, -0.77324]}
        onPointerEnter={(e) => handlePointerEnter(e)}
        onPointerOut={(e) => handlePointerOut(e)}
        onClick={case1Clicked}
        userData={{ name: 'case1' }}
      >
        <meshBasicMaterial map={logoTex} />
      </mesh>
      <mesh
        geometry={nodes.ipad_emissive002.geometry}
        position={[-0.90973, 0.98622, -0.77324]}
        onPointerEnter={(e) => handlePointerEnter(e)}
        onPointerOut={(e) => handlePointerOut(e)}
        onClick={case2Clicked}
        userData={{ name: 'case2' }}
      >
        <meshBasicMaterial map={logoTex} />
      </mesh>
      <mesh
        geometry={nodes.ipad_emissive.geometry}
        position={[-1.33327, 0.6179, -0.77324]}
        onPointerEnter={(e) => handlePointerEnter(e)}
        onPointerOut={(e) => handlePointerOut(e)}
        onClick={case3Clicked}
        userData={{ name: 'case3' }}
      >
        <meshBasicMaterial map={logoTex} />
      </mesh>
      <mesh
        geometry={nodes.email_emissive.geometry}
        position={[-1.43596, 1.74085, -0.82356]}
        onPointerEnter={(e) => handlePointerEnter(e)}
        onPointerOut={(e) => handlePointerOut(e)}
        onClick={emailClicked}
        userData={{ name: 'email' }}
      >
        <meshBasicMaterial
          color={`rgb(${emissionColors.email.r},${emissionColors.email.g},${emissionColors.email.b})`}
        />
      </mesh>
      <mesh
        geometry={nodes.insta_emissive.geometry}
        position={[-1.43596, 1.74085, -0.82356]}
        onPointerEnter={(e) => handlePointerEnter(e)}
        onPointerOut={(e) => handlePointerOut(e)}
        onClick={instaClicked}
        userData={{ name: 'instagram' }}
      >
        <meshBasicMaterial
          color={`rgb(${emissionColors.instagram.r},${emissionColors.instagram.g},${emissionColors.instagram.b})`}
        />
      </mesh>
      <mesh
        geometry={nodes.linkedin_emissive.geometry}
        position={[-1.43596, 1.74085, -0.82356]}
        onPointerEnter={(e) => handlePointerEnter(e)}
        onPointerOut={(e) => handlePointerOut(e)}
        onClick={linkedinClicked}
        userData={{ name: 'linkedIn' }}
      >
        <meshBasicMaterial
          color={`rgb(${emissionColors.linkedIn.r},${emissionColors.linkedIn.g},${emissionColors.linkedIn.b})`}
        />
      </mesh>
      <mesh
        geometry={nodes.table_emissive.geometry}
        position={[1.19391, 0.46596, -0.72178]}
      >
        <meshBasicMaterial color={'white'} />
      </mesh>
      <mesh
        geometry={nodes.shelving_emissive.geometry}
        position={[-1.1789, 0.51015, -0.87188]}
      >
        <meshBasicMaterial color={emissionColors.shelving} />
      </mesh>
      <mesh
        geometry={nodes.lamp_emissive_orange.geometry}
        position={[1.62294, 1.49388, -0.73567]}
      >
        <meshBasicMaterial color={emissionColors.orangeLamp} />
      </mesh>
      <mesh
        geometry={nodes.lamp_emissive_purple.geometry}
        position={[1.62294, 1.49388, -0.73567]}
      >
        <meshBasicMaterial color={emissionColors.purpleLamp} />
      </mesh>
      <mesh
        geometry={nodes.lamp_emissive_pink.geometry}
        position={[1.62294, 1.49388, -0.73567]}
      >
        <meshBasicMaterial color={emissionColors.pinkLamp} />
      </mesh>
      <mesh
        geometry={nodes.github_emissive.geometry}
        position={[-1.43596, 1.74085, -0.82356]}
        onPointerEnter={(e) => handlePointerEnter(e)}
        onPointerOut={(e) => handlePointerOut(e)}
        onClick={githubClicked}
        userData={{ name: 'github' }}
      >
        <meshBasicMaterial
          color={`rgb(${emissionColors.github.r},${emissionColors.github.g},${emissionColors.github.b})`}
        />
      </mesh>
      <mesh
        geometry={nodes.bake2.geometry}
        position={[0.99771, 0.87454, -1.053]}
      >
        <meshBasicMaterial map={bakedTex2} transparent />
      </mesh>
      <mesh
        geometry={nodes.bake3.geometry}
        position={[0.86468, 0.35838, -0.66076]}
      >
        <meshBasicMaterial map={bakedTex3} transparent />
      </mesh>
      <mesh
        geometry={nodes.bake4.geometry}
        position={[1.19391, 0.46596, -0.72178]}
      >
        <meshBasicMaterial map={bakedTex4} transparent />
      </mesh>
      <mesh
        geometry={nodes.bake5.geometry}
        position={[-0.79024, -0.91263, -0.7532]}
      >
        <meshBasicMaterial map={bakedTex5} transparent />
      </mesh>
      <mesh
        geometry={nodes.bake6.geometry}
        position={[-1.1789, 0.51015, -0.87188]}
      >
        <meshBasicMaterial map={bakedTex6} transparent />
      </mesh>
      <mesh
        geometry={nodes.bake7.geometry}
        position={[1.62294, 1.49388, -0.73567]}
      >
        <meshBasicMaterial map={bakedTex7} transparent />
      </mesh>
      <mesh
        geometry={nodes.bake8.geometry}
        position={[-0.00624, 0.83668, 0.20061]}
      >
        <meshBasicMaterial map={bakedTex8} transparent />
      </mesh>

      {/* <OrbitControls camera={myCamera} ref={controls} /> */}
    </group>
  );
}

useGLTF.preload('/beresford_design.glb');
