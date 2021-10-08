uniform float uTime;

attribute float aOffset;

varying vec3 vColor;

void main() {

  vec3 newPosition = position;

  // for repeating animation
  float timeMod = mod(uTime * aOffset, 7.0) + 0.6;

  float shiftedTime = timeMod - 1.0 + 0.331;
  float exponent = 3.0 / 5.0;

  float radius = (sin(pow(shiftedTime, exponent) * 2.0) + 1.0) * 3.0;

  newPosition.x = cos(uTime * position.x) * radius;
  newPosition.y = (timeMod - 0.6) * 5.0;
  newPosition.z = sin(uTime * position.z) * radius;

  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  vColor = color;

  gl_PointSize = 1000.0;

  // size attenuation
  gl_PointSize *= (1.0 / - viewPosition.z);
}