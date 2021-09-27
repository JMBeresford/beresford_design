import React from 'react';
import { extend } from '@react-three/fiber';
import { Effects } from '@react-three/drei';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';

extend({ SMAAPass });

const PostProcessing = () => {
  return (
    <Effects
      multisamping={8}
      renderIndex={1}
      disableGamma={true}
      disableRenderPass={false}
    ></Effects>
  );
};

export default PostProcessing;
