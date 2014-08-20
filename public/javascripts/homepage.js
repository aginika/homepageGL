var HomePage = function(){

    this.setupGL = function(fov, aspect, near, far, width, height){
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
        camera.position.set( 0, 0, 50 );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( width, height );
        document.body.appendChild( renderer.domElement );

        var controls = new THREE.OrbitControls( camera );
        controls.damping = 0.2;
        controls.addEventListener('change', function(){renderer.render(scene, camera);});

        var directionalLight = new THREE.DirectionalLight( 0xffffff );
        directionalLight.position.set( 0, 0.7, 0.7 );
        scene.add( directionalLight );

        var ambientLight = new THREE.AmbientLight(0x333333);
        scene.add( ambientLight );

        var pointLight = new THREE.PointLight(0xcccccc,2.0,0); 
        pointLight.position.set(0, 50, 0);
        scene.add( pointLight );

        var pointLight2 = new THREE.PointLight(0xcccccc,2.0,0); 
        pointLight2.position.set(60, -100, 0);
        scene.add( pointLight2 );

        this.camera = camera;
        this.renderer = renderer;
        this.directionalLight = directionalLight;
        this.scene = scene;
        this.controls = controls;
    };

    this.render = function(){
        this.renderer.render( this.scene, this.camera );
    };

    this.onWindowResize = function() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    };
};