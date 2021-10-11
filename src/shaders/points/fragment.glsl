uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uResolution;

varying vec3 vColor;

void main() {
  float d = distance(gl_PointCoord, vec2(0.5)) * 2.0;
  
  float strength = 1.0 - d;
  strength = pow(strength, 10.0);

  // Final color
  vec3 color = vColor * strength;
  gl_FragColor = vec4(color, strength);
}