uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uResolution;

varying vec3 vColor;

void main() {
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 10.0);

  // Final color
  vec3 color = mix(vec3(1.0), vColor, clamp(0.0,2.0,strength * 4.0));
  gl_FragColor = vec4(color, strength);
}