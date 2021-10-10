uniform float uTime;
uniform vec3 uColor;
uniform vec2 uResolution;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)

void main() {
  vec2 st = gl_FragCoord.xy/uResolution;

  float strength = smoothstep(0.3,0.9, st.y);

  vec3 color = uColor * strength;
  vec3 white = vec3(1.0,1.0,1.0) * strength;

  vec2 stNew = vec2(st.x * 20.0, st.y);

  float noise = cnoise3(vec3(stNew, uTime * 0.1));
  float whiteNoise = cnoise3(vec3(stNew, uTime * -0.1));

  color *= smoothstep(0.4, 1.0, noise);
  white *= smoothstep(0.4, 1.0, whiteNoise);

  vec3 outputColor = mix(color, white, 0.5);

  gl_FragColor = vec4(outputColor,1.0);
}