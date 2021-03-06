/**
 * Source File Name: playBonus.ts
 * Authors: Angelina Gutierrez and Elaine Mae Villarino
 * Last Modified by: Angelina Gutierrez
 * Date last modified: April 18, 2016
 * Program description: Creates the Bonus Level of the game
 */

module scenes {
    /**
     * The playBonus class is where the main action occurs for the Bonus Level
     * 
     * @class Scene
     */
    export class playBonus extends scenes.Scene {
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
        private gameLabel: createjs.Text;
        private bonusLabel: createjs.Text;

        //Coin
        private coinLoader: any;
        private coins: Physijs.ConcaveMesh[];

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

        //Platform Objects
        private platformTexture: Texture;

        private platformPhysicsMaterial: Physijs.Material;
        private platformGeometry: CubeGeometry;
        private platformMaterial: PhongMaterial;
        private platform: Physijs.Mesh;


        /**
         * @constructor 
         */
        constructor() {
            super();
            this._initialize();
            this.start();
        }

        //PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++
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
            this.mouseControls = new objects.MouseControls();

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

            // Add Score Label
            this.scoreLabel = new createjs.Text(
                "SCORE: " + scoreValue,
                "40px Consolas",
                "#ffffff"
            );
            this.scoreLabel.x = config.Screen.WIDTH * 0.45;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.15;
            this.stage.addChild(this.scoreLabel);
            console.log("Added Score Label to stage");

            this.gameLabel = new createjs.Text(
                "BONUS LEVEL",
                "40px Consolas",
                "#ffffff"
            );
            this.gameLabel.x = config.Screen.WIDTH * 0.1;
            this.gameLabel.y = (config.Screen.HEIGHT * 0.1) * 0.15;
            this.stage.addChild(this.gameLabel);
            console.log("Added Game Label to stage");


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
            this.ambientLight = new AmbientLight(0x404040);
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
            this.groundTexture = new THREE.TextureLoader().load('../../Assets/images/StarryVoid.png');
            this.groundTexture.wrapS = THREE.RepeatWrapping;
            this.groundTexture.wrapT = THREE.RepeatWrapping;
            this.groundTexture.repeat.set(1, 1);

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
            this.player.position.set(0, 10, 0);
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
            this.roadMainTexture = new THREE.TextureLoader().load('../../Assets/images/MetalBase.jpg');
            this.roadMainTexture.wrapS = THREE.RepeatWrapping;
            this.roadMainTexture.wrapT = THREE.RepeatWrapping;
            this.roadMainTexture.repeat.set(2, 2);

            this.roadMainMaterial = new PhongMaterial();
            this.roadMainMaterial.map = this.roadMainTexture;
            this.roadMainMaterial.bumpScale = 0.2;
            
            // Road One
            this.road1Geometry = new BoxGeometry(3.5, 4, 80);
            this.road1PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road1 = new Physijs.BoxMesh(this.road1Geometry, this.road1PhysicsMaterial, 0);
            this.road1.receiveShadow = true;
            this.road1.castShadow = true;
            this.road1.position.set(40, 0, 0);
            this.road1.name = "Road1";
            this.add(this.road1);
            console.log("Added a Road 1 to the scene");

            //Road Two

            this.road2Geometry = new BoxGeometry(3.5, 4, 80);
            this.road2PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road2 = new Physijs.BoxMesh(this.road2Geometry, this.road2PhysicsMaterial, 0);
            this.road2.receiveShadow = true;
            this.road2.castShadow = true;
            this.road2.position.set(-40, 0, 0);
            this.road2.name = "Road2";
            this.add(this.road2);
            console.log("Added a Road 2 to the scene");

            // Road Three
            this.road3Geometry = new BoxGeometry(85, 4, 3.5);
            this.road3PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road3 = new Physijs.BoxMesh(this.road3Geometry, this.road3PhysicsMaterial, 0);
            this.road3.receiveShadow = true;
            this.road3.castShadow = true;
            this.road3.position.set(0, 0, -40);
            this.road3.name = "Road3";
            this.add(this.road3);
            console.log("Added a Road 3 to the scene");

            // Road Four
            this.road4Geometry = new BoxGeometry(85, 4, 3.5);
            this.road4PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road4 = new Physijs.BoxMesh(this.road4Geometry, this.road4PhysicsMaterial, 0);
            this.road4.receiveShadow = true;
            this.road4.castShadow = true;
            this.road4.position.set(0, 0, 40);
            this.road4.name = "Road4";
            this.add(this.road4);
            console.log("Added a Road 4 to the scene");

            // Road Five
            this.road5Geometry = new BoxGeometry(3.5, 4, 80);
            this.road5PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road5 = new Physijs.BoxMesh(this.road5Geometry, this.road5PhysicsMaterial, 0);
            this.road5.receiveShadow = true;
            this.road5.castShadow = true;
            this.road5.position.set(0, 0, 0);
            this.road5.name = "Road5";
            this.add(this.road5);
            console.log("Added a Road 5 to the scene");

            // Road Six
            this.road6Geometry = new BoxGeometry(80, 4, 3.5);
            this.road6PhysicsMaterial = Physijs.createMaterial(this.roadMainMaterial, 0, 0);
            this.road6 = new Physijs.BoxMesh(this.road6Geometry, this.road6PhysicsMaterial, 0);
            this.road6.receiveShadow = true;
            this.road6.castShadow = true;
            this.road6.position.set(0, 0, 0);
            this.road6.name = "Road6";
            this.add(this.road6);
            console.log("Added a Road 6 to the scene");
        }

        /**
     * This method adds platforms
     * 
     * @method addPlatforms
     * @return void
     */

        private addPlatforms(): void {

            this.platformTexture = new THREE.TextureLoader().load('../../Assets/images/MarbleGreen.jpg');
            this.platformMaterial = new PhongMaterial();
            this.platformMaterial.map = this.platformTexture;
            this.platformMaterial.bumpScale = 0.2;

            this.platformGeometry = new BoxGeometry(5, 6, 5);
            this.platformPhysicsMaterial = Physijs.createMaterial(this.platformMaterial, 0, 0);
            this.platform = new Physijs.BoxMesh(this.platformGeometry, this.platformMaterial, 0);
            this.platform.receiveShadow = true;
            this.platform.castShadow = true;
            this.platform.position.set(0, 0, 0);
            this.platform.name = "Platform";
            this.add(this.platform);
            console.log("Added a platform to the scene");
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
                for (var count: number = 1; count <= 30; count++) {
                    self.coins[count] = new Physijs.ConvexMesh(geometry, this.coinMaterial);
                    self.coins[count].receiveShadow = true;
                    self.coins[count].castShadow = true;
                    self.coins[count].name = "Coin";
                    self.setCoinPosition(self.coins[count]);
                    self.add(self.coins[count]);
                    console.log("Added Coin " + count + " to the Scene");
                }
            });
        }

        /**
     * This method randomly sets the coin object's position
     * 
     * @method setCoinPosition
     * @return void
     */
        private setCoinPosition(coin: Physijs.ConvexMesh): void {
            var randomPointX: number = Math.floor(Math.random() * 40) - 10;
            var randomPointZ: number = Math.floor(Math.random() * 40) - 10;
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

                // Move the Lava Floor
                this.remove(this.ground);
                this.ground.position.y += 0.025;
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

        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++

        private _simulateScene(): void {
            this.simulate(undefined, 2);
        }

        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
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
            this.name = "playBonus";
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

            // Add custom coin imported from Blender
            this.setCoinMesh();
            
            // Stop the layering of the background music aka just play ONCE dammit
            var myBGMusic = createjs.Sound.play("museBonus");
            myBGMusic.play({ interrupt: "none", loop: -1, volume: 0.6 });
            
            //Collision check
            
            //Collision with death plane
            
            this.ground.addEventListener('collision', (event) => {
                console.log(event);
                if (event.name === "Coin") {
                    this.remove(event);
                    this.setCoinPosition(event);
                }
            })
            
            //Collision with player
            this.player.addEventListener('collision', (event) => {
                console.log(event);
                if (event.name === "Lava floor") {
                    createjs.Sound.play("lava");
                    console.log("Booped ground");
                     livesValue--;
                    myBGMusic.stop();
                    document.exitPointerLock();
                    this.children = []; //Clean up children objects
                    console.log(this);
                    if (scoreValue > highestScore) {
                        highestScore = scoreValue;
                    }
                    currentScene = config.Scene.OVER;
                    changeScene();
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
                if (event.name === "Platform") {
                    console.log("Booped Platform");
                    this.isGrounded = true;
                    createjs.Sound.play("land");
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
         * The update method updates the animation loop and other objects
         * 
         * @method update
         * @return void
         */
        public update(): void {
            this.checkControls();
            this.stage.update();

            if (!this.keyboardControls.paused) {
                this.simulate();
            }
        }

        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         * 
         * @method resize
         * @return void
         */
        public resize(): void {
            canvas.style.width = "100%";
            this.gameLabel.x = config.Screen.WIDTH * 0.1;
            this.gameLabel.y = (config.Screen.HEIGHT * 0.1) * 0.15;
            this.scoreLabel.x = config.Screen.WIDTH * 0.45;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.15;
            this.stage.update();
        }
    }
}