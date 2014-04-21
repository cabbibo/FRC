uniform sampler2D sprite;
varying vec2 vUv;
varying vec3 vVel;
varying vec3 vPos;
varying float life;
varying vec3 distance;

const float pi = 3.14159;
void main() {
 vec4 s = texture2D( sprite , vec2( gl_PointCoord.x , 1.0 - gl_PointCoord.y) );

  float l =  (10. / length( distance ));

 vec3 velC = vec3( .01 , 0. , .1 ) * 1./length(vVel);
 vec3 disC = vec3( .5 , 0. , -.1 ) * l;

 vec3 color = normalize( velC + disC );
 
  gl_FragColor = vec4( color ,s.w * .1);

}


