uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uResolution;

varying vec2 vUv;

void main() {
  vec2 newUv = vUv;

  float aspect = uResolution.x / uResolution.y;

  newUv.x *= aspect;

  vec4 color = texture2D(uTexture, newUv);

  gl_FragColor = color;
}