uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uResolution;

varying vec3 vColor;
varying float height;

void main() {
  float d = min(distance(gl_PointCoord, vec2(0.5)) * 2.0, 1.0);
  
  float strength = 1.0 - d;
  strength = pow(strength, 5.0);

  // Final color
  vec3 color = vColor;

  float opacity = smoothstep(0.0, 0.7, strength);
  float fade = smoothstep(0.05, 0.2, 1.0 - height);

  gl_FragColor = vec4(color, opacity * fade);
}