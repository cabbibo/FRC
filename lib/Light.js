
var lightMarkerGeo = new THREE.IcosahedronGeometry();

function Light(color,texture){

  this.position = new THREE.Vector3();
  this.velocity = new THREE.Vector3();

  this.scene = new THREE.Object3D();
  this.scene.position = this.position;

  this.dampening = .9;
  this.mass = Math.random() * 20;

  this.light = new THREE.PointLight( color , 3 , SCENESIZE  );
  this.scene.add( this.light );

  var geo = new THREE.IcosahedronGeometry( SCENESIZE / 50 , 1 );
  var mat = new THREE.MeshPhongMaterial({

    map:  texture,
    bumpMap: texture,
    bumpScale: 1,
    shininess: 15,
    metal: true,
    color:color,
    ambient:color
  });


  this.marker = new THREE.Mesh( geo , mat );


  this.scene.add( this.marker );

}

Light.prototype.addToScene = function(){

  scene.add( this.scene );

}
