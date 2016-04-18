//Source file name: instructions.ts
//Authors: Angelina Gutierrez and Elaine Mae Villarino
//Last modified by: Angelina Gutierrez
//Date last modified: April 18, 2016
//Program description: Creates the instructions scene

module scenes {
    /**
     * The Instruction scene extends scene.Scene superclass is used to
     * create an instruction scene for the THREEJS Game
     * 
     * @class Scene
     * @extends scene.Scene
     * @param blocker {HTMLElement}
     * @param _stage {createjs.Stage}
     * @param _gameLabel {createjs.Text}
     * @param _startButton {createjs.Bitmap}
     * @param _exitButton {createjs.Bitmap}
     */
    export class Instructions extends Physijs.Scene {
        private _blocker: HTMLElement;
        private _stage: createjs.Stage;
        private _gameLabel: createjs.Text;
        private _instructionsLabel: createjs.Text;
        private _instructionsLabel2: createjs.Text;
        private _descriptionLabel: createjs.Text;
        private _startButton: createjs.Bitmap;
        private _exitButton: createjs.Bitmap;

        /**
         * @constructor 
         */
        constructor() {
            super();
            this._initialize();
            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++

        private _setupCanvas(): void {
            canvas.style.width = "100%";
            canvas.setAttribute("height", config.Screen.HEIGHT.toString());
            canvas.style.backgroundColor = "#ffffff";
        }

        /**
        * This method sets up default values for class member variables
        * and objects
        * 
        * @method _initialize
        * @return void
        */
        private _initialize(): void {
            // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";

            // setup canvas for menu scene
            this._setupCanvas();
            // setup a stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        }

        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++

        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {
            var myIntroBGMusic = createjs.Sound.play("museIntro");
            myIntroBGMusic.play({ interrupt: "none", loop: -1, volume: 1 });

            this._gameLabel = new createjs.Text(
                "INSTRUCTIONS",
                "80px Consolas",
                "#000000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredLineHeight() * 0.5;
            this._gameLabel.x = config.Screen.WIDTH * 0.5;
            this._gameLabel.y = (config.Screen.HEIGHT * 0.5) - 200;
            this._stage.addChild(this._gameLabel);

            //Instructions text
            
            this._instructionsLabel = new createjs.Text(
                "MOVE = WASD Keys   JUMP = Space Bar    CAMERA = Mouse",
                "30px Consolas",
                "#000000"
            );
            this._instructionsLabel.regX = this._instructionsLabel.getMeasuredWidth() * 0.5;
            this._instructionsLabel.regY = this._instructionsLabel.getMeasuredLineHeight() * 0.5;
            this._instructionsLabel.x = config.Screen.WIDTH * 0.5;
            this._instructionsLabel.y = (config.Screen.HEIGHT * 0.5) - 125;
            this._stage.addChild(this._instructionsLabel);

            this._instructionsLabel2 = new createjs.Text(
                "Get to the exit before the floor reaches the platform!",
                "40px Consolas",
                "#000000"
            );
            this._instructionsLabel2.regX = this._instructionsLabel2.getMeasuredWidth() * 0.5;
            this._instructionsLabel2.regY = this._instructionsLabel2.getMeasuredLineHeight() * 0.5;
            this._instructionsLabel2.x = config.Screen.WIDTH * 0.5;
            this._instructionsLabel2.y = (config.Screen.HEIGHT * 0.5) - 50;
            this._stage.addChild(this._instructionsLabel2);

            //Buttons

            this._startButton = new createjs.Bitmap(assets.getResult("StartButton"));
            this._startButton.regX = this._startButton.getBounds().width * 0.5;
            this._startButton.regY = this._startButton.getBounds().height * 0.5;
            this._startButton.x = config.Screen.WIDTH * 0.5;
            this._startButton.y = (config.Screen.HEIGHT * 0.5) + 100;
            this._stage.addChild(this._startButton);

            this._startButton.on("mouseover", (event: createjs.MouseEvent) => {
                event.target.alpha = 0.7;
            });

            this._startButton.on("mouseout", (event: createjs.MouseEvent) => {
                event.target.alpha = 1.0;
            });

            this._startButton.on("click", (event: createjs.MouseEvent) => {
                currentScene = config.Scene.PLAY;
                myIntroBGMusic.stop();
                changeScene();
            });

            this._exitButton = new createjs.Bitmap(assets.getResult("ExitButton"));
            this._exitButton.regX = this._exitButton.getBounds().width * 0.5;
            this._exitButton.regY = this._exitButton.getBounds().height * 0.5;
            this._exitButton.x = config.Screen.WIDTH * 0.2;
            this._exitButton.y = (config.Screen.HEIGHT * 0.5) + 50;
            this._stage.addChild(this._exitButton);

            this._exitButton.on("mouseover", (event: createjs.MouseEvent) => {
                event.target.alpha = 0.7;
            });

            this._exitButton.on("mouseout", (event: createjs.MouseEvent) => {
                event.target.alpha = 1.0;
            });

            this._exitButton.on("click", (event: createjs.MouseEvent) => {
                currentScene = config.Scene.INSTRUCTIONS;
                myIntroBGMusic.stop();
                changeScene();
            });
        }

        /**
         * The update method updates the animation loop and other objects
         * 
         * @method update
         * @return void
         */
        public update(): void {
            this._stage.update();

        }

        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         * 
         * @method resize
         * @return void
         */
        public resize(): void {
            this._setupCanvas();
        }
    }
}