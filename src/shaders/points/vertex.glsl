uniform float uTime;

attribute float aOffset;

varying vec3 vColor;

#define PI 3.14159

void main() {

  vec3 newPosition = position;

  // for repeating animation
  float timeMod = mod(uTime * aOffset, 7.0) + 0.6;

  float radius = 15.0 * exp(-0.85 * timeMod) * sin(PI * 0.1 * timeMod);

  radius *= 2.5;

  newPosition.x = cos(uTime * position.x) * radius;
  newPosition.y = (timeMod - 0.6) * 5.0;
  newPosition.z = sin(uTime * position.z) * radius;

  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  vColor = color;

  gl_PointSize = 1000.0 * aOffset;

  // size attenuation
  gl_PointSize *= (5.0 / - viewPosition.z);
}