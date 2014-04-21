var SELECTED_LINK;

function Link( string , texture ){


  var size = SCENESIZE / 20 ;
  this.title = string;
  this.tTitle = textCreator.createTexture( this.title );

  this.titleMesh = new THREE.Mesh(
    new THREE.PlaneGeometry( size , size ),
    new THREE.MeshPhongMaterial({
      map: this.tTitle,
      bumpMap: texture,
      bumpScale: 1,
      shininess: 15,
      metal: true,
      color:0xaaaaaa,
      ambient:0xaaaaaa,
      transparent:true,
    })
  );
  this.titleMesh.scale.x = this.tTitle.scaledWidth;
  this.titleMesh.scale.y = this.tTitle.scaledHeight;

  this.titleMesh.position.z = size * 1.;
  this.material = new THREE.MeshPhongMaterial({

    map:  texture,
    bumpMap: texture,
    bumpScale: 1,
    shininess: 15,
    metal: true,
    color:0x333333,
    ambient:0x333333
  });

 // this.material = new THREE.MeshNormalMaterial();
  this.geo = new THREE.SphereGeometry( SCENESIZE / 20 , 32 , 16 );

  this.mesh = new THREE.Mesh( this.geo , this.material );

  this.scene = new THREE.Object3D();


  this.scene.add( this.mesh );
  this.scene.add( this.titleMesh );

  var ringGeo = new THREE.CircleGeometry( size * 3 , 20 );

  this.activationRing = new THREE.Object3D();
  this.activationRing.mainMesh = new THREE.Mesh( ringGeo , this.material.clone() );
  this.activationRing.add( this.activationRing.mainMesh );
  this.activationRing.position.z = -size * 1.3;
  this.activationRing.visible = false;
  this.activationRing.mainMesh.material.opacity = .3;
  this.activationRing.mainMesh.material.transparent = true;


  this.distanceMesh = new THREE.Mesh( ringGeo , this.material.clone() );
  this.distanceMesh.position.z = -size * 1.2;
  this.distanceMesh.scale.multiplyScalar( .6 );
  this.distanceMesh.material.blending = THREE.AdditiveBlending;
 // this.distanceMesh.material.color = 0xff0000;
  this.distanceMesh.material.transparent = true;
  this.distanceMesh.opacity = .2;
  this.scene.add( this.distanceMesh );

}


Link.prototype.addToScene = function(){

  scene.add( this.scene );

}

Link.prototype.hoverOver = function(){

  console.log('HELLLO' );
  this.hovered = true;

  this.scene.add( this.activationRing );

}

Link.prototype.hoverOut = function(){

  this.hovered = false;
  this.scene.remove( this.activationRing );

}

Link.prototype.activate = function(){

  console.log( 'YUP' );
  SELECTED_LINK = this;

}
