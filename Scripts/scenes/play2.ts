/**
 * Source File Name: play2.ts
 * Authors: Angelina Gutierrez and Elaine Mae Villarino
 * Last Modified by: Angelina Gutierrez
 * Date last modified: April 18, 2016
 * Program description: Creates the second level of the game
 */
/**
 * The Scenes module is a namespace to reference all scene objects
 * 
 * @module scenes
 */
module scenes {
    /**
     * The Play 2 class is where the main action occurs for the game level 2
     * 
     * @class Play
     * @param havePointerLock {boolean}
     */
    export class Play2 extends scenes.Scene {
        private havePointerLock: boolean;
        private element: any;


        private blocker: HTMLElement;
        private instructions: HTMLElement;

        private spotLight: SpotLight;
        private ambientLight: AmbientLight;

        private groundGeometry: CubeGeometry;
        private groundPhysicsMaterial: Physijs.Material;
        private groundMaterial: PhongMaterial;
        private ground: Physijs.Mesh;
        private groundTexture: Texture;
        private groundTextureNormal: Texture;

        private playerGeometry: CubeGeometry;
        private playerMaterial: Physijs.Material;
        private player: Physijs.Mesh;

        private keyboardControls: objects.KeyboardControls;
        private mouseControls: objects.MouseControls;
        private isGrounded: boolean;

        private coinGeometry: Geometry;
        private coinMaterial: Physijs.Material;

        private velocity: Vector3;
        private prevTime: number;
        private clock: Clock;

        private stage: createjs.Stage;
        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;
        private bonusLabel: createjs.Text;

        //Coin
        private coinLoader: any;
        private coins: Physijs.ConcaveMesh[];
        private coin1: Physijs.ConvexMesh;
        private coin2: Physijs.ConvexMesh;
        private coin3: Physijs.ConvexMesh;

        //Door object

        private door1PhysicsMaterial: Physijs.Material;
        private door1Geometry: CubeGeometry;
        private door1Material: PhongMaterial;
        private door1: Physijs.Mesh;
        private door1Texture: Texture;

        //Paths

        //Road Objects

        private roadMainTexture: Texture;
        private roadMainMaterial: PhongMaterial;

        private road1Geometry: CubeGeometry;
        private road1PhysicsMaterial: Physijs.Material;
        private road1: Physijs.Mesh;

        private road2Geometry: CubeGeometry;
        private road2PhysicsMaterial: Physijs.Material;
        private road2: Physijs.Mesh;

        private road3Geometry: CubeGeometry;
        private road3PhysicsMaterial: Physijs.Material;
        private road3: Physijs.Mesh;

        private road4Geometry: CubeGeometry;
        private road4PhysicsMaterial: Physijs.Material;
        private road4: Physijs.Mesh;

        private road5Geometry: CubeGeometry;
        private road5PhysicsMaterial: Physijs.Material;
        private road5: Physijs.Mesh;

        private road6Geometry: CubeGeometry;
        private road6PhysicsMaterial: Physijs.Material;
        private road6: Physijs.Mesh;

        private road7Geometry: CubeGeometry;
        private road7PhysicsMaterial: Physijs.Material;
        private road7: Physijs.Mesh;

        private road8Geometry: CubeGeometry;
        private road8PhysicsMaterial: Physijs.Material;
        private road8: Physijs.Mesh;

        private road9Geometry: CubeGeometry;
        private road9PhysicsMaterial: Physijs.Material;
        private road9: Physijs.Mesh;

        private road10Geometry: CubeGeometry;
        private road10PhysicsMaterial: Physijs.Material;
        private road10: Physijs.Mesh;

        private road11Geometry: CubeGeometry;
        private road11PhysicsMaterial: Physijs.Material;
        private road11: Physijs.Mesh;

        private road12Geometry: CubeGeometry;
        private road12PhysicsMaterial: Physijs.Material;
        private road12: Physijs.Mesh;

        private road13Geometry: CubeGeometry;
        private road13PhysicsMaterial: Physijs.Material;
        private road13: Physijs.Mesh;

        private road14Geometry: CubeGeometry;
        private road14PhysicsMaterial: Physijs.Material;
        private road14: Physijs.Mesh;

        private road15Geometry: CubeGeometry;
        private road15PhysicsMaterial: Physijs.Material;
        private road15: Physijs.Mesh;

        private road16Geometry: CubeGeometry;
        private road16PhysicsMaterial: Physijs.Material;
        private road16: Physijs.Mesh;

        private road17Geometry: CubeGeometry;
        private road17PhysicsMaterial: Physijs.Material;
        private road17: Physijs.Mesh;

        private road18Geometry: CubeGeometry;
        private road18PhysicsMaterial: Physijs.Material;
        private road18: Physijs.Mesh;

        private road19Geometry: CubeGeometry;
        private road19PhysicsMaterial: Physijs.Material;
        private road19: Physijs.Mesh;

        private road20Geometry: CubeGeometry;
        private road20PhysicsMaterial: Physijs.Material;
        private road20: Physijs.Mesh;

        private road21Geometry: CubeGeometry;
        private road21PhysicsMaterial: Physijs.Material;
        private road21: Physijs.Mesh;

        private road22Geometry: CubeGeometry;
        private road22PhysicsMaterial: Physijs.Material;
        private road22: Physijs.Mesh;

        private road23Geometry: CubeGeometry;
        private road23PhysicsMaterial: Physijs.Material;
        private road23: Physijs.Mesh;

        private road24Geometry: CubeGeometry;
        private road24PhysicsMaterial: Physijs.Material;
        private road24: Physijs.Mesh;

        private road25Geometry: CubeGeometry;
        private road25PhysicsMaterial: Physijs.Material;
        private road25: Physijs.Mesh;

        private road26Geometry: CubeGeometry;
        private road26PhysicsMaterial: Physijs.Material;
        private road26: Physijs.Mesh;

        private road27Geometry: CubeGeometry;
        private road27PhysicsMaterial: Physijs.Material;
        private road27: Physijs.Mesh;

        private road28Geometry: CubeGeometry;
        private road28PhysicsMaterial: Physijs.Material;
        private road28: Physijs.Mesh;

        private road29Geometry: CubeGeometry;
        private road29PhysicsMaterial: Physijs.Material;
        private road29: Physijs.Mesh;

        private road30Geometry: CubeGeometry;
        private road30PhysicsMaterial: Physijs.Material;
        private road30: Physijs.Mesh;

        private road31Geometry: CubeGeometry;
        private road31PhysicsMaterial: Physijs.Material;
        private road31: Physijs.Mesh;

        private road32Geometry: CubeGeometry;
        private road32PhysicsMaterial: Physijs.Material;
        private road32: Physijs.Mesh;

        //PlatformObjects
        
        private mainPlatformTexture: Texture;
        private platformTexture: Texture;

        private platform1PhysicsMaterial: Physijs.Material;
        private platform1Geometry: CubeGeometry;
        private platform1Material: PhongMaterial;
        private platform1: Physijs.Mesh;
        private platform1Texture: Texture;

        private platform2PhysicsMaterial: Physijs.Material;
        private platform2Geometry: CubeGeometry;
        private platform2Material: PhongMaterial;
        private platform2: Physijs.Mesh;
        private platform2Texture: Texture;

        private platform3PhysicsMaterial: Physijs.Material;
        private platform3Geometry: CubeGeometry;
        private platform3Material: PhongMaterial;
        private platform3: Physijs.Mesh;
        private platform3Texture: Texture;

        private platform4PhysicsMaterial: Physijs.Material;
        private platform4Geometry: CubeGeometry;
        private platform4Material: PhongMaterial;
        private platform4: Physijs.Mesh;
        private platform4Texture: Texture;

        private platform5PhysicsMaterial: Physijs.Material;
        private platform5Geometry: CubeGeometry;
        private platform5Material: PhongMaterial;
        private platform5: Physijs.Mesh;
        private platform5Texture: Texture;

        /**
         * @constructor
         */
        constructor() {


            super();

            this._initialize();
            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++

        /**
         * Sets up the initial canvas for the play scene
         * 
         * @method setupCanvas
         * @return void
         */
        private _setupCanvas(): void {
            canvas.setAttribute("width", config.Screen.WIDTH.toString());
            canvas.setAttribute("height", (config.Screen.HEIGHT * 0.1).toString());
            canvas.style.backgroundColor = "#000000";
            canvas.style.opacity = "0.5";
            canvas.style.position = "absolute";
        }

        /**
         * The initialize method sets up key objects to be used in the scene
         * 
         * @method _initialize
         * @returns void
         */
        private _initialize(): void {
            // Create to HTMLElements
            this.blocker = document.getElementById("blocker");
            this.instructions = document.getElementById("instructions");
            this.blocker.style.display = "block";

            // setup canvas for menu scene
            this._setupCanvas();

            this.prevTime = 0;
            this.stage = new createjs.Stage(canvas);
            this.velocity = new Vector3(0, 0, 0);

            // setup a THREE.JS Clock object
            this.clock = new Clock();

            // Instantiate Game Controls
            this.keyboardControls = new objects.KeyboardControls();
            this.mouseControls = new objects.MouseControls()

            // initialize  score and lives values
            //scoreValue = 0;
            //livesValue = 5;
            //bonusValue = 9999;
        }
        /**
         * This method sets up the scoreboard for the scene
         * 
         * @method setupScoreboard
         * @returns void
         */
        private setupScoreboard(): void {

            // Add Lives Label
            this.livesLabel = new createjs.Text(
                "LIVES: " + livesValue,
                "40px Consolas",
                "#ffffff"
            );
            this.livesLabel.x = config.Screen.WIDTH * 0.45;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.15;
            this.stage.addChild(this.livesLabel);
            console.log("Added Lives Label to stage");

            // Add Score Label
            this.scoreLabel = new createjs.Text(
                "SCORE: " + scoreValue,
                "40px Consolas",
                "#ffffff"
            );
            this.scoreLabel.x = config.Screen.WIDTH * 0.1;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.1) * 0.15;
            this.stage.addChild(this.scoreLabel);
            console.log("Added Score Label to stage");

            //Add Bonus Label
            this.bonusLabel = new createjs.Text(
                "Bonus: " + bonusValue,
                "40px Consolas",
                "#ffffff"
            );
            this.bonusLabel.x = config.Screen.WIDTH * 0.8;
            this.bonusLabel.y = (config.Screen.HEIGHT * 0.1) * 0.15;
            this.stage.addChild(this.bonusLabel);
            console.log("Added bonusLabel to stage");
        }

        /**
         * Add a spotLight to the scene
         * 
         * @method addSpotLight
         * @return void
         */
        private addSpotLight(): void {
            // Spot Light
            this.spotLight = new SpotLight(0xffffff);
            this.spotLight.position.set(20, 40, -15);
            this.spotLight.castShadow = true;
            this.spotLight.intensity = 2;
            this.spotLight.lookAt(new Vector3(0, 0, 0));
            this.spotLight.shadowCameraNear = 2;
            this.spotLight.shadowCameraFar = 200;
            this.spotLight.shadowCameraLeft = -5;
            this.spotLight.shadowCameraRight = 5;
            this.spotLight.shadowCameraTop = 5;
            this.spotLight.shadowCameraBottom = -5;
            this.spotLight.shadowMapWidth = 2048;
            this.spotLight.shadowMapHeight = 2048;
            this.spotLight.shadowDarkness = 0.5;
            this.spotLight.name = "Spot Light";
            this.add(this.spotLight);
            console.log("Added spotLight to scene");
        }
        /**
         * Add an AmbientLight to Scene
         * @method addAmbientLight
         * @return void
         */
        private addAmbientLight(): void {
            // Add an AmbientLight to Scene
            this.ambientLight = new AmbientLight(0xffffff);
            this.add(this.ambientLight);
            console.log("Added an Ambient Light to Scene");
        }
        /**
         * Adds lava floor to the scene
         * 
         * @method addLavaFloor
         * @return void
         */
        private addLavaFloor(): void {
            this.groundTexture = new THREE.TextureLoader().load('../../Assets/images/water-texture.jpg');
            this.groundTexture.wrapS = THREE.RepeatWrapping;
            this.groundTexture.wrapT = THREE.RepeatWrapping;
            this.groundTexture.repeat.set(1, 1);

            this.groundTextureNormal = new THREE.TextureLoader().load('../../Assets/images/RockErodeNormal.png');
            this.groundTextureNormal.wrapS = THREE.RepeatWrapping;
            this.groundTextureNormal.wrapT = THREE.RepeatWrapping;
            this.groundTextureNormal.repeat.set(1, 1);

            this.groundMaterial = new PhongMaterial();
            this.groundMaterial.map = this.groundTexture;
            //this.groundMaterial.bumpMap = this.groundTextureNormal;
            this.groundMaterial.bumpScale = 0.2;

            this.groundGeometry = new BoxGeometry(150, 1, 150);
            this.groundPhysicsMaterial = Physijs.createMaterial(this.groundMaterial, 0, 0);
            this.ground = new Physijs.ConvexMesh(this.groundGeometry, this.groundPhysicsMaterial, 0);
            this.ground.receiveShadow = true;
            this.ground.name = "Lava floor";
            this.ground.position.set(0, -50, 0);
            this.add(this.ground);
            console.log("Added Lava floor to scene");
        }

        /**
         * Adds the player controller to the scene
         * 
         * @method addPlayer
         * @return void
         */
        private addPlayer(): void {
            // Player Object
            this.playerGeometry = new BoxGeometry(2, 4, 2);
            this.playerMaterial = Physijs.createMaterial(new LambertMaterial({ color: 0x00ff00 }), 0.4, 0);

            this.player = new Physijs.BoxMesh(this.playerGeometry, this.playerMaterial, 1);
            this.player.position.set(0, 10, 10);
            this.player.receiveShadow = true;
            this.player.castShadow = true;
            this.player.name = "Player";
            this.add(this.player);
            console.log("Added Player to Scene");
        }

        /**
         *Adds paths to scene
         * 
         *@method addRoads
         *@return void
         */

        private addRoads(): void {
            // Road Components
            this.roadMainTexture = new THREE.TextureLoader().load('../../Assets/images/RockSediment.jpg');
            this.roadMainTexture.wrapS = THREE.RepeatWrapping;
            this.roadMainTexture.wrapT = THREE.RepeatWrapping;
            this.roadMainTexture.repeat.set(15, 15);

            this.roadMainMaterial = new PhongMaterial();
            this.roadMainMaterial.map = this.roadMainTexture;
            this.roadMainMaterial.bumpScale = 0.2;

            // Road One
            this.road1Geometry = new BoxGeometry(2.5, 4, 50);
            this.road1PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road1 = new Physijs.BoxMesh(this.road1Geometry, this.road1PhysicsMaterial, 0);
            this.road1.receiveShadow = true;
            this.road1.castShadow = true;
            this.road1.position.set(40, 0, 0);
            this.road1.name = "Road1";
            this.add(this.road1);
            console.log("Added a Road 1 to the scene");

            //Road Two

            this.road2Geometry = new BoxGeometry(2.5, 4, 50);
            this.road2PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road2 = new Physijs.BoxMesh(this.road2Geometry, this.road2PhysicsMaterial, 0);
            this.road2.receiveShadow = true;
            this.road2.castShadow = true;
            this.road2.position.set(-40, 0, 0);
            this.road2.name = "Road2";
            this.add(this.road2);
            console.log("Added a Road 2 to the scene");

            // Road Three
            this.road3Geometry = new BoxGeometry(82.5, 4, 1.7);
            this.road3PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road3 = new Physijs.BoxMesh(this.road3Geometry, this.road3PhysicsMaterial, 0);
            this.road3.receiveShadow = true;
            this.road3.castShadow = true;
            this.road3.position.set(0, 0, -25);
            this.road3.name = "Road3";
            this.add(this.road3);
            console.log("Added a Road 3 to the scene");

            // Road Four
            this.road4Geometry = new BoxGeometry(82.5, 4, 1.7);
            this.road4PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road4 = new Physijs.BoxMesh(this.road4Geometry, this.road4PhysicsMaterial, 0);
            this.road4.receiveShadow = true;
            this.road4.castShadow = true;
            this.road4.position.set(0, 0, 25);
            this.road4.name = "Road4";
            this.add(this.road4);
            console.log("Added a Road 4 to the scene");
            
            // Road Five
            this.road5Geometry = new BoxGeometry(2.5, 4, 65);
            this.road5PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road5 = new Physijs.BoxMesh(this.road5Geometry, this.road5PhysicsMaterial, 0);
            this.road5.receiveShadow = true;
            this.road5.castShadow = true;
            this.road5.position.set(0, 0, 30);
            this.road5.name = "Road5";
            this.add(this.road5);
            console.log("Added a Road 5 to the scene");
            
            // Road Six
            this.road6Geometry = new BoxGeometry(2, 4, 45);
            this.road6PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road6 = new Physijs.BoxMesh(this.road6Geometry, this.road6PhysicsMaterial, 0);
            this.road6.receiveShadow = true;
            this.road6.castShadow = true;
            this.road6.position.set(25, 0, -20);
            this.road6.name = "Road6";
            this.add(this.road6);
            console.log("Added a Road 6 to the scene");
            
            // Road Seven
            this.road7Geometry = new BoxGeometry(90, 4, 1);
            this.road7PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road7 = new Physijs.BoxMesh(this.road7Geometry, this.road7PhysicsMaterial, 0);
            this.road7.receiveShadow = true;
            this.road7.castShadow = true;
            this.road7.position.set(50, 0, -40);
            this.road7.name = "Road7";
            this.add(this.road7);
            console.log("Added a Road 7 to the scene");
            
            // Road Eight
            this.road8Geometry = new BoxGeometry(65, 4, 2);
            this.road8PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road8 = new Physijs.BoxMesh(this.road8Geometry, this.road8PhysicsMaterial, 0);
            this.road8.receiveShadow = true;
            this.road8.castShadow = true;
            this.road8.position.set(20, 0, 43);
            this.road8.name = "Road8";
            this.add(this.road8);
            console.log("Added a Road 8 to the scene");
            
            // Road Nine
            this.road9Geometry = new BoxGeometry(1, 4, 90);
            this.road9PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road9 = new Physijs.BoxMesh(this.road9Geometry, this.road9PhysicsMaterial, 0);
            this.road9.receiveShadow = true;
            this.road9.castShadow = true;
            this.road9.position.set(65, 0, 0);
            this.road9.name = "Road9";
            this.add(this.road9);
            console.log("Added a Road 9 to the scene");
            
            // Road Ten
            this.road10Geometry = new BoxGeometry(65, 4, 2.5);
            this.road10PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road10 = new Physijs.BoxMesh(this.road10Geometry, this.road10PhysicsMaterial, 0);
            this.road10.receiveShadow = true;
            this.road10.castShadow = true;
            this.road10.position.set(-20, 0, -50);
            this.road10.name = "Road10";
            this.add(this.road10);
            console.log("Added a Road 10 to the scene");
            
            // Road Eleven
            this.road11Geometry = new BoxGeometry(1.5, 4, 30);
            this.road11PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road11 = new Physijs.BoxMesh(this.road11Geometry, this.road11PhysicsMaterial, 0);
            this.road11.receiveShadow = true;
            this.road11.castShadow = true;
            this.road11.position.set(-15, 0, -45);
            this.road11.name = "Road11";
            this.add(this.road11);
            console.log("Added a Road 11 to the scene");
            
            // Road Twelve
            this.road12Geometry = new BoxGeometry(1.5, 4, 50);
            this.road12PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road12 = new Physijs.BoxMesh(this.road12Geometry, this.road12PhysicsMaterial, 0);
            this.road12.receiveShadow = true;
            this.road12.castShadow = true;
            this.road12.position.set(-25, 0, 50);
            this.road12.name = "Road12";
            this.add(this.road12);
            console.log("Added a Road 12 to the scene");
            
            // Road Thirteen
            this.road13Geometry = new BoxGeometry(50, 4, 1);
            this.road13PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road13 = new Physijs.BoxMesh(this.road13Geometry, this.road13PhysicsMaterial, 0);
            this.road13.receiveShadow = true;
            this.road13.castShadow = true;
            this.road13.position.set(-30, 0, 55);
            this.road13.name = "Road13";
            this.add(this.road13);
            console.log("Added a Road 13 to the scene");
            
            // Road Fourteen
            this.road14Geometry = new BoxGeometry(50, 4, 1);
            this.road14PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road14 = new Physijs.BoxMesh(this.road14Geometry, this.road14PhysicsMaterial, 0);
            this.road14.receiveShadow = true;
            this.road14.castShadow = true;
            this.road14.position.set(-30, 0, 40);
            this.road14.name = "Road14";
            this.add(this.road14);
            console.log("Added a Road 14 to the scene");
            
            // Road Fifteen
            this.road15Geometry = new BoxGeometry(1.25, 4, 30);
            this.road15PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road15 = new Physijs.BoxMesh(this.road15Geometry, this.road15PhysicsMaterial, 0);
            this.road15.receiveShadow = true;
            this.road15.castShadow = true;
            this.road15.position.set(-55, 0, 30);
            this.road15.name = "Road15";
            this.add(this.road15);
            console.log("Added a Road 15 to the scene");
            
            // Road Sixteen
            this.road16Geometry = new BoxGeometry(1.5, 4, 40);
            this.road16PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road16 = new Physijs.BoxMesh(this.road16Geometry, this.road16PhysicsMaterial, 0);
            this.road16.receiveShadow = true;
            this.road16.castShadow = true;
            this.road16.position.set(-60, 0, -15);
            this.road16.name = "Road16";
            this.add(this.road16);
            console.log("Added a Road 16 to the scene");
            
            // Road Seventeen
            this.road17Geometry = new BoxGeometry(50, 4, 2.5);
            this.road17PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road17 = new Physijs.BoxMesh(this.road17Geometry, this.road17PhysicsMaterial, 0);
            this.road17.receiveShadow = true;
            this.road17.castShadow = true;
            this.road17.position.set(-35, 0, -5);
            this.road17.name = "Road17";
            this.add(this.road17);
            console.log("Added a Road 17 to the scene");


        }

        /**
      * This method adds platforms
      * 
      * @method addPlatforms
      * @return void
      */

        private addPlatforms(): void {
            // Platform Components
            this.mainPlatformTexture = new THREE.TextureLoader().load('../../Assets/images/MarbleGreen.jpg');
            this.platformTexture = new THREE.TextureLoader().load('../../Assets/images/AbstractVarious.jpg');

            //Platform One

            this.platform1Material = new PhongMaterial();
            this.platform1Material.map = this.mainPlatformTexture;
            this.platform1Material.bumpScale = 0.2;

            this.platform1Geometry = new BoxGeometry(5, 6, 5);
            this.platform1PhysicsMaterial = Physijs.createMaterial(this.platform1Material, 0, 0);
            this.platform1 = new Physijs.BoxMesh(this.platform1Geometry, this.platform1PhysicsMaterial, 0);
            this.platform1.receiveShadow = true;
            this.platform1.castShadow = true;
            this.platform1.position.set(0, 0, 10);
            this.platform1.name = "Platform1";
            this.add(this.platform1);
            console.log("Added a Platform 1 to the scene");

            //Platform Two

            this.platform2Material = new PhongMaterial();
            this.platform2Material.map = this.platformTexture;
            this.platform2Material.bumpScale = 0.2;

            this.platform2Geometry = new BoxGeometry(5, 6, 5);
            this.platform2PhysicsMaterial = Physijs.createMaterial(this.platform2Material, 0, 0);
            this.platform2 = new Physijs.BoxMesh(this.platform2Geometry, this.platform2PhysicsMaterial, 0);
            this.platform2.receiveShadow = true;
            this.platform2.castShadow = true;
            this.platform2.position.set(60, 0, -50);
            this.platform2.name = "Platform2";
            this.add(this.platform2);
            console.log("Added a Platform 2 to the scene");

            //Platform Three
            this.platform3Material = new PhongMaterial();
            this.platform3Material.map = this.platformTexture;
            this.platform3Material.bumpScale = 0.2;

            this.platform3Geometry = new BoxGeometry(5, 6, 5);
            this.platform3PhysicsMaterial = Physijs.createMaterial(this.platform3Material, 0, 0);
            this.platform3 = new Physijs.BoxMesh(this.platform3Geometry, this.platform3PhysicsMaterial, 0);
            this.platform3.receiveShadow = true;
            this.platform3.castShadow = true;
            this.platform3.position.set(-60, 0, 50);
            this.platform3.name = "Platform3";
            this.add(this.platform3);
            console.log("Added a Platform 3 to the scene");

            //Platform 4

            this.platform4Material = new PhongMaterial();
            this.platform4Material.map = this.platformTexture;
            this.platform4Material.bumpScale = 0.2;

            this.platform4Geometry = new BoxGeometry(5, 6, 5);
            this.platform4PhysicsMaterial = Physijs.createMaterial(this.platform4Material, 0, 0);
            this.platform4 = new Physijs.BoxMesh(this.platform4Geometry, this.platform4PhysicsMaterial, 0);
            this.platform4.receiveShadow = true;
            this.platform4.castShadow = true;
            this.platform4.position.set(60, 0, 50);
            this.platform4.name = "Platform4";
            this.add(this.platform4);
            console.log("Added a Platform 4 to the scene");

            //Platform 5

            this.platform5Material = new PhongMaterial();
            this.platform5Material.map = this.platformTexture;
            this.platform5Material.bumpScale = 0.2;

            this.platform5Geometry = new BoxGeometry(5, 6, 5);
            this.platform5PhysicsMaterial = Physijs.createMaterial(this.platform5Material, 0, 0);
            this.platform5 = new Physijs.BoxMesh(this.platform5Geometry, this.platform5PhysicsMaterial, 0);
            this.platform5.receiveShadow = true;
            this.platform5.castShadow = true;
            this.platform5.position.set(-60, 0, -50);
            this.platform5.name = "Platform5";
            this.add(this.platform5);
            console.log("Added a Platform 5 to the scene");
        }

        /** */
        /**
         * Method for creating the door
         * 
         * @method setDoor
         * @return void
         */

        private setDoor(): void {

            this.door1Texture = new THREE.TextureLoader().load('../../Assets/images/doorsTextureNo3515.jpg');

            this.door1Material = new PhongMaterial();
            this.door1Material.map = this.door1Texture;
            this.door1Material.bumpScale = 0.2;

            this.door1Geometry = new BoxGeometry(3, 7, 0.5);
            this.door1PhysicsMaterial = Physijs.createMaterial(this.door1Material, 0, 0);
            this.door1 = new Physijs.BoxMesh(this.door1Geometry, this.door1PhysicsMaterial, 0);
            this.door1.receiveShadow = true;
            this.door1.castShadow = true;

            //Use rng to determine position of door
            var num: number = Math.floor(Math.random() * 10);
            if (num > 5) {
                if (num > 8) {
                    this.door1.position.set(60, 5, -51);
                }
                else {
                    this.door1.position.set(-60, 5, -51);
                }
            }
            else {
                if (num > 3) {
                    this.door1.position.set(60, 5, 51);
                }
                else {
                    this.door1.position.set(-60, 5, 51);
                }
            }
            this.door1.name = "Door1";
            this.add(this.door1);
            console.log("Added a door to scene");
        }

        /**
         * This method creates the coins
         * 
         * @method setCoinMesh
         * @return void
         */
        private setCoinMesh(): void {

            var self = this;
            this.coins = new Array<Physijs.ConvexMesh>(); // Instantiate a convex mesh array

            var coinLoader = new THREE.JSONLoader().load("../../Assets/imported/coin.json", function(geometry: THREE.Geometry) {
                var phongMaterial = new PhongMaterial({ color: 0xE7AB32 });
                phongMaterial.emissive = new THREE.Color(0xE7AB32);

                this.coinMaterial = Physijs.createMaterial((phongMaterial), 0.4, 0.6);
                for (var count: number = 1; count <= 4; count++) {
                    self.coins[count] = new Physijs.ConvexMesh(geometry, this.coinMaterial);
                    self.coins[count].receiveShadow = true;
                    self.coins[count].castShadow = true;
                    self.coins[count].name = "Coin";
                    console.log("Added Coin " + count + " to the Scene");
                }
                // Platform 2
                if (self.door1.position.set(60, 5, -51)) {
                    self.coins[1].position.set(60, 5, 50);
                    self.coins[2].position.set(60, 5, -50);
                    self.coins[3].position.set(-60, 5, 50);
                    self.coins[4].position.set(-60, 5, -50);
                }
                // Platform 3
                if (self.door1.position.set(-60, 5, 51)) {
                    self.coins[1].position.set(60, 5, 50);
                    self.coins[2].position.set(60, 5, -50);
                    self.coins[3].position.set(-60, 5, 50);
                    self.coins[4].position.set(-60, 5, -50);
                }
                // Platform 4
                if (self.door1.position.set(60, 5, 51)) {
                    self.coins[1].position.set(60, 5, 50);
                    self.coins[2].position.set(60, 5, -50);
                    self.coins[3].position.set(-60, 5, 50);
                    self.coins[4].position.set(-60, 5, -50);
                }
                // Platform 5
                if (self.door1.position.set(-60, 5, -51)) {
                    self.coins[1].position.set(60, 5, 50);
                    self.coins[2].position.set(60, 5, -50);
                    self.coins[3].position.set(-60, 5, 50);
                    self.coins[4].position.set(-60, 5, -50);
                }
                self.add(self.coins[1]);
                self.add(self.coins[2]);
                self.add(self.coins[3]);
                self.add(self.coins[4]);
                console.log("Added coins");
            }
            );
        }

        /**
       * This method randomly sets the coin object's position
       * 
       * @method setCoinPosition
       * @return void
       */
        private setCoinPosition(coin: Physijs.ConvexMesh): void {
            var randomPointX: number = Math.floor(Math.random() * 20) - 10;
            var randomPointZ: number = Math.floor(Math.random() * 20) - 10;
            coin.position.set(randomPointX, 10, randomPointZ);
            this.add(coin);
        }


        /**
         * Event Handler method for any pointerLockChange events
         * 
         * @method pointerLockChange
         * @return void
         */
        pointerLockChange(event): void {
            if (document.pointerLockElement === this.element) {
                // enable our mouse and keyboard controls
                this.keyboardControls.enabled = true;
                this.mouseControls.enabled = true;
                this.blocker.style.display = 'none';
            } else {
                if (livesValue <= 0) {
                    this.blocker.style.display = 'none';
                    this.keyboardControls.enabled = false;
                    this.mouseControls.enabled = false;

                    document.removeEventListener('pointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('mozpointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('webkitpointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('pointerlockerror', this.pointerLockError.bind(this), false);
                    document.removeEventListener('mozpointerlockerror', this.pointerLockError.bind(this), false);
                    document.removeEventListener('webkitpointerlockerror', this.pointerLockError.bind(this), false);
                }
                else {
                    // disable our mouse and keyboard controls
                    this.keyboardControls.enabled = false;
                    this.mouseControls.enabled = false;
                    this.blocker.style.display = '-webkit-box';
                    this.blocker.style.display = '-moz-box';
                    this.blocker.style.display = 'box';
                    this.instructions.style.display = '';
                    console.log("PointerLock disabled");

                }
                // disable our mouse and keyboard controls
                this.keyboardControls.enabled = false;
                this.mouseControls.enabled = false;
                console.log("PointerLock disabled");
            }
        }

        /**
         * Event handler for PointerLockError
         * 
         * @method pointerLockError
         * @return void
         */
        private pointerLockError(event): void {
            this.instructions.style.display = '';
            console.log("PointerLock Error Detected!!");
        }

        // Check Controls Function

        /**
         * This method updates the player's position based on user input
         * 
         * @method checkControls
         * @return void
         */
        private checkControls(): void {
            if (this.keyboardControls.enabled) {
                this.velocity = new Vector3();
                bonusValue--;
                this.bonusLabel.text = "Bonus: " + bonusValue;
                
                // Move the Lava Floor
                this.remove(this.ground);
                this.ground.position.y += 0.006;
                this.add(this.ground);

                var time: number = performance.now();
                var delta: number = (time - this.prevTime) / 1000;
                
                // For a smoother jump, have the movements outside the isGrounded method.
                if (this.keyboardControls.moveForward) {
                    this.velocity.z -= 400.0 * delta;
                }
                if (this.keyboardControls.moveLeft) {
                    this.velocity.x -= 400.0 * delta;
                }
                if (this.keyboardControls.moveBackward) {
                    this.velocity.z += 400.0 * delta;
                }
                if (this.keyboardControls.moveRight) {
                    this.velocity.x += 400.0 * delta;
                }

                if (this.isGrounded) {
                    var direction = new Vector3(0, 0, 0);

                    if (this.keyboardControls.jump) {
                        this.velocity.y += 4000.0 * delta;
                        if (this.player.position.y > 5) {
                            this.isGrounded = false;
                            createjs.Sound.play("jump");
                        }
                        if (this.player.position.y < 0) {
                            this.isGrounded = false;
                        }
                    }

                    this.player.setDamping(0.7, 0.1);
                    // Changing player's rotation
                    this.player.setAngularVelocity(new Vector3(0, this.mouseControls.yaw, 0));
                    direction.addVectors(direction, this.velocity);
                    direction.applyQuaternion(this.player.quaternion);
                    if (Math.abs(this.player.getLinearVelocity().x) < 20 && Math.abs(this.player.getLinearVelocity().y) < 10) {
                        this.player.applyCentralForce(direction);
                    }

                    this.cameraLook();

                } // isGrounded ends

                //reset Pitch and Yaw
                this.mouseControls.pitch = 0;
                this.mouseControls.yaw = 0;

                this.prevTime = time;
                
                // For Switching Scenes
                if (this.keyboardControls.switchLevelOne) {
                    createjs.Sound.muted = true;
                    document.exitPointerLock();
                    this.children = []; //Clean up children objects
                    console.log(this);
                    if (scoreValue > highestScore) {
                        highestScore = scoreValue;
                    }
                    currentScene = config.Scene.PLAY;
                    changeScene();
                }
                if (this.keyboardControls.switchLevelTwo) {
                    createjs.Sound.muted = true;
                    document.exitPointerLock();
                    this.children = []; //Clean up children objects
                    console.log(this);
                    if (scoreValue > highestScore) {
                        highestScore = scoreValue;
                    }
                    currentScene = config.Scene.PLAY2;
                    changeScene();
                }
                if (this.keyboardControls.switchLevelThree) {
                    createjs.Sound.muted = true;
                    document.exitPointerLock();
                    this.children = []; //Clean up children objects
                    console.log(this);
                    if (scoreValue > highestScore) {
                        highestScore = scoreValue;
                    }
                    currentScene = config.Scene.PLAY3;
                    changeScene();
                }
               
                if (this.keyboardControls.switchBonus) {
                    createjs.Sound.muted = true;
                    document.exitPointerLock();
                    this.children = [];
                    console.log(this);
                    if (scoreValue > highestScore) {
                        highestScore = scoreValue;
                    }
                    currentScene = config.Scene.PLAYBONUS;
                    changeScene();
                }

            } // Controls Enabled ends
            else {
                this.player.setAngularVelocity(new Vector3(0, 0, 0));
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++

        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */

        private _simulateScene(): void {
            this.simulate(undefined, 2);
        }
        public start(): void {


            // Set Up Scoreboard
            this.setupScoreboard();

            //check to see if pointerlock is supported
            this.havePointerLock = 'pointerLockElement' in document ||
                'mozPointerLockElement' in document ||
                'webkitPointerLockElement' in document;



            // Check to see if we have pointerLock
            if (this.havePointerLock) {
                this.element = document.body;

                this.instructions.addEventListener('click', () => {

                    // Ask the user for pointer lock
                    console.log("Requesting PointerLock");

                    this.element.requestPointerLock = this.element.requestPointerLock ||
                        this.element.mozRequestPointerLock ||
                        this.element.webkitRequestPointerLock;

                    this.element.requestPointerLock();
                });

                document.addEventListener('pointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('mozpointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('webkitpointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('pointerlockerror', this.pointerLockError.bind(this), false);
                document.addEventListener('mozpointerlockerror', this.pointerLockError.bind(this), false);
                document.addEventListener('webkitpointerlockerror', this.pointerLockError.bind(this), false);
            }

            // Scene changes for Physijs
            this.name = "Play";
            this.fog = new THREE.Fog(0xffffff, 0, 750);
            this.setGravity(new THREE.Vector3(0, -10, 0));

            // Add Spot Light to the scene
            this.addSpotLight();

            //Add AmbientLight to scene
            this.addAmbientLight();

            // Ground Object
            this.addLavaFloor();

            //Add paths
            this.addRoads();

            //Add platforms
            this.addPlatforms();

            // Add player controller
            this.addPlayer();

            //Add a door goddammit
            this.setDoor();

            // Add custom coin imported from Blender
            this.setCoinMesh();
            
            // Stop the layering of the background music aka just play ONCE dammit
            var myBGMusic = createjs.Sound.play("museSecond");
            myBGMusic.play({ interrupt: "none", loop: -1, volume: 0.6 });

            // Collision Check

            this.player.addEventListener('collision', (event) => {
                console.log(event);
                if (event.name === "Lava floor") {
                    createjs.Sound.play("lava");
                    console.log("Booped ground");
                    livesValue--;

                    if (livesValue <= 0) {
                        // Stop BGMusic from playing into the Game OVER scene
                        myBGMusic.stop();
                        //Game over yeaaAAAHHH H H H H HH
                        document.exitPointerLock();
                        this.children = []; //Clean up children objects
                        console.log(this);
                        if (scoreValue > highestScore) {
                            highestScore = scoreValue;
                        }
                        if (scoreValue <= 8000) {
                            currentScene = config.Scene.PLAYBONUS;
                            livesValue = 1;
                            bonusValue = 9999;
                            changeScene();
                        } else {
                            currentScene = config.Scene.OVER;
                            changeScene();
                        }
                    }
                    else {
                        //Reset player, update lives
                        this.livesLabel.text = "LIVES: " + livesValue;
                        this.remove(this.player);
                        this.player.position.set(0, 10, 10);
                        this.player.rotation.set(0, 0, 0);
                        this.add(this.player);
                    }
                }
                if (event.name === "Road1") {
                    createjs.Sound.play("walk");
                    console.log("Booped Road1");
                    this.isGrounded = true;
                }

                if (event.name === "Road2") {
                    console.log("Booped Road2");
                    this.isGrounded = true;
                }

                if (event.name === "Road3") {
                    console.log("Booped Road3");
                    this.isGrounded = true;
                }

                if (event.name === "Road4") {
                    console.log("Booped Road4");
                    this.isGrounded = true;
                }
                if (event.name === "Road5") {
                    console.log("Booped Road5");
                    this.isGrounded = true;
                }
                if (event.name === "Road6") {
                    console.log("Booped Road6");
                    this.isGrounded = true;
                }
                if (event.name === "Road7") {
                    console.log("Booped Road7");
                    this.isGrounded = true;
                }
                if (event.name === "Road8") {
                    console.log("Booped Road8");
                    this.isGrounded = true;
                }
                if (event.name === "Road9") {
                    console.log("Booped Road9");
                    this.isGrounded = true;
                }
                if (event.name === "Road10") {
                    console.log("Booped Road10");
                    this.isGrounded = true;
                }
                if (event.name === "Road11") {
                    console.log("Booped Road11");
                    this.isGrounded = true;
                }
                if (event.name === "Road12") {
                    console.log("Booped Road12");
                    this.isGrounded = true;
                }
                if (event.name === "Road13") {
                    console.log("Booped Road13");
                    this.isGrounded = true;
                }
                if (event.name === "Road14") {
                    console.log("Booped Road14");
                    this.isGrounded = true;
                }
                if (event.name === "Road15") {
                    console.log("Booped Road15");
                    this.isGrounded = true;
                }
                if (event.name === "Road16") {
                    console.log("Booped Road16");
                    this.isGrounded = true;
                }
                if (event.name === "Road17") {
                    console.log("Booped Road17");
                    this.isGrounded = true;
                }

                if (event.name === "Platform1") {
                    console.log("Booped Platform 1");
                    this.isGrounded = true;
                    createjs.Sound.play("land");
                }
                if (event.name === "Platform2") {
                    console.log("Booped Platform 2");
                    this.isGrounded = true;
                }
                if (event.name === "Platform3") {
                    console.log("Booped Platform 3");
                    this.isGrounded = true;
                }
                if (event.name === "Platform4") {
                    console.log("Booped Platform 4");
                    this.isGrounded = true;
                }

                if (event.name === "Platform5") {
                    console.log("Booped Platform 5");
                    this.isGrounded = true;
                }
                if (event.name === "Door1") {
                    // Stop BGMusic from playing into the next Level 3
                    myBGMusic.stop();
                    createjs.Sound.play("door");
                    console.log("Booped Door 1");
                    document.exitPointerLock();
                    currentScene = config.Scene.PLAY3;
                    scoreValue += bonusValue;
                    this.scoreLabel.text = "SCORE: " + scoreValue;
                    bonusValue = 9999;
                    changeScene();
                }
                if (event.name === "Coin") {
                    createjs.Sound.play("coin");
                    scene.remove(event);
                    scoreValue += 100;
                    this.scoreLabel.text = "SCORE: " + scoreValue;
                }
            });

            // Create parent-child relationship with camera and player
            this.player.add(camera);
            camera.rotation.set(0, 0, 0);
            camera.position.set(0, 1, 0);
            
            // For level-building only 
            // Sees a bird's eye view of the level
            //camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 300);
            //camera.position.set(0, 100, 100);
            //camera.lookAt(new Vector3(0, 0, 0));
            
            this.simulate();
        }

        /**
         * Camera Look function
         * 
         * @method cameraLook
         * @return void
         */
        private cameraLook(): void {
            var zenith: number = THREE.Math.degToRad(90);
            var nadir: number = THREE.Math.degToRad(-90);

            var cameraPitch: number = camera.rotation.x + this.mouseControls.pitch;

            // Constrain the Camera Pitch
            camera.rotation.x = THREE.Math.clamp(cameraPitch, nadir, zenith);
        }

        /**
         * @method update
         * @returns void
         */
        public update(): void {


            this.checkControls();
            this.stage.update();

            if (!this.keyboardControls.paused) {
                this.simulate();
            }
        }

        /**
         * Responds to screen resizes
         * 
         * @method resize
         * @return void
         */
        public resize(): void {
            canvas.style.width = "100%";
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.scoreLabel.x = config.Screen.WIDTH * 0.8;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.bonusLabel.x = config.Screen.WIDTH * 0.8;
            this.bonusLabel.y = (config.Screen.HEIGHT * 0.1) * 0.15;
            this.stage.update();
        }
    }
}