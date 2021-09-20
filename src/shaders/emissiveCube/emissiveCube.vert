uniform float uTime;
uniform float uScale;
uniform float uHovered;

varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(uScale * position, 1.0);
}