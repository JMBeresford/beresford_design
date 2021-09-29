uniform float uTime;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 newPos = position;

  float strength = sin(position.y) * 0.05;

  newPos.x += strength * sin(uTime);
  //newPos.y -= strength * sin(uTime) * position.x;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}