var main = function () {    
    var width  = $(window).width();
    var height = $(window).height();
    var fov    = 60;
    var aspect = width / height;
    var near   = 1;
    var far    = 1000;

    var homepage = new HomePage();
    homepage.setupGL(fov, aspect, near, far, width, height);

    var geometry = new THREE.CubeGeometry( 30, 30, 30 );
    var texture = THREE.ImageUtils.loadTexture( 'images/crate.gif' );
    texture.anisotropy = homepage.renderer.getMaxAnisotropy();

    var material = new THREE.MeshBasicMaterial( { map: texture } );

    var mesh = new THREE.Mesh( geometry, material );
    homepage.scene.add( mesh );



    var geometry2 = new THREE.CubeGeometry( 90, 90, 130 );
    var material2 = new THREE.MeshPhongMaterial( { color: 0x0000ff , side: THREE.DoubleSide} );
    var mesh2 = new THREE.Mesh( geometry2, material2 );
    homepage.scene.add( mesh2 );


    
    ( function renderLoop () {
        requestAnimationFrame( renderLoop );
        mesh.rotation.set(
            0,
            mesh.rotation.y + .01,
            mesh.rotation.z + .01
        );
        homepage.controls.update();
        homepage.render();
    } )();
};

window.addEventListener( 'DOMContentLoaded', main, false );
