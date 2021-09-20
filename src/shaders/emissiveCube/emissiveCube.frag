uniform float uTime;
uniform vec3 uColor;
uniform float uHovered;

varying vec2 vUv;

#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)
#pragma glslify: pnoise4 = require(glsl-noise/periodic/4d)

void main() {
  vec2 centeredUv = abs(vUv * 2.0 - 1.0);

  float dist = distance(vec3(vUv, 0.0), vec3(0.5,0.5,0.0));

  float strength = (abs(sin((dist - uTime * 1.25))) - .15); // uHovered is pseudo-bool

  gl_FragColor = vec4(uColor + strength, 1.0);
}