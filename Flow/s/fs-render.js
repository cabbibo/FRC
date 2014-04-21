uniform sampler2D sprite;
varying vec2 vUv;
varying vec3 vVel;
varying vec3 vPos;
varying float life;

const float pi = 3.14159;
void main() {
 vec4 s = texture2D( sprite , vec2( gl_PointCoord.x , 1.0 - gl_PointCoord.y) );
 
 
  gl_FragColor = vec4( s.xyz * abs(normalize(vVel)) * abs(normalize(vPos)) ,s.w );

}


