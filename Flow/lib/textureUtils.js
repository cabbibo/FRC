function createPositionsTexture( geo , size , type ){

  var point = new THREE.Vector3();
  var facesLength = geo.faces.length;
  var s2 = size * size;

  var type = type || 'random';


  var data = new Float32Array( s2 * 4 );

  for( var i = 0; i < data.length; i += 4 ){

    var face;
    if( type == 'random' ){

      var index = Math.floor( Math.random() * facesLength );
      face = geometry.faces[ index ];

    }else if( type == 'ordered' ){

      var normal = i / data.length;
      var index = Math.floor(  normal * facesLength );
      face = geometry.faces[ index ];

    }

    var vertex1 = geometry.vertices[ face.a ];
    var vertex2 = geometry.vertices[ face.b ];
    var vertex3 = geometry.vertices[ face.c ];


    
    if( type == 'random' ){

      var rand = Math.random() > .5 ? vertex2 : vertex3;
      point.subVectors( rand , vertex1 );
      point.multiplyScalar( Math.random() );
      point.add( vertex1 );
    }else if( type == 'ordered' ){

      //TODO Make this actually ordered
      var pointsPerFace = size*size / facesLength;
      var pointsPerEdge = pointsPerFace / 3;
      var rand = Math.random() > .5 ? vertex2 : vertex3;
      point.subVectors( rand , vertex1 );
      point.multiplyScalar( Math.random() );
      point.add( vertex1 );



    }

    data[ i     ] = point.x;
    data[ i + 1 ] = point.y;
    data[ i + 2 ] = point.z;
    data[ i + 3 ] = Math.floor(i/4);  // Saving ID as alpha!

  }

  var texture = new THREE.DataTexture(
    data,
    size,
    size,
    THREE.RGBAFormat,
    THREE.FloatType 
  );


  // Setting up the Texture, so that there is NO
  // distortion, and it is just a straight texture
  // to be sampled from
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = truel

  
  return texture;

}
