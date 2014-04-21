
  /*
  
     GeoPosTexture 

     This is a utility which will take in a geometry,
     and provide a set of utility functions

  */


  function GeoPosTexture( geo ){

    this.geo = geo;
    
  }

  GeoPosTexture.prototype.createRandomEdgeTexture = function( size ){

    var point = new THREE.Vector3();
    var lFaces = this.geo.faces.length;
    var s2 = size*size;

    var data = new Float32Array( s2 * 4 );

    for( var i = 0; i < data.length; i += 4 ){

      var index = Math.floor( Math.random() * lFaces );
      var face = this.geo.faces[ index ];

      var vertex1 = this.geo.vertices[ face.a ];
      var vertex2 = this.geo.vertices[ face.b ];
      var vertex3 = this.geo.vertices[ face.c ];

      var randVert = Math.random() > .5 ? vertex2 : vertex3;
      point.subVectors( randVert , vertex1 );
      point.multiplyScalar( Math.random() );
      point.add( vertex1 );
 
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
    texture.needsUpdate = true;

    return texture;


  }

// TODO:
// Create other Texture Types

  
