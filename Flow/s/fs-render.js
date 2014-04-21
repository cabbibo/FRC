uniform sampler2D sprite;
varying vec2 vUv;
varying vec3 vVel;
varying vec3 vPos;
varying float life;
varying float id;
varying vec3 distance;

const float pi = 3.14159;
void main() {
 vec4 s = texture2D( sprite , vec2( gl_PointCoord.x , 1.0 - gl_PointCoord.y) );

  float l =  (10. / length( distance ));

 vec3 velC = vec3( .01 , 0. , .1 ) * 1./length(vVel);
 vec3 disC = vec3( .5 , 0. , -.1 ) * l;
 vec3 idC  = (1.0/life)* vec3( .0 , .4 , .1 ) * sin( id/1000.0 );

 vec3 color = normalize( velC + disC +idC );
 
 gl_FragColor = vec4( color ,s.w * .5);

}


