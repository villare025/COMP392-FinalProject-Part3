//Source file name: menu.ts
//Authors: Angelina Gutierrez and Elaine Mae Villarino
//Last modified by: Angelina Gutierrez
//Date last modified: April 06, 2016
//Program description: Creates the menu scene

/**
 * @module scenes
 */
module scenes {
    /**
     * Menu Scene extends scenes.Scene superclass is used to
     * create a custom menu for the THREEJS Game
     * 
     * @class Menu
     * @extends scene.Scene
     * @param blocker {HTMLElement}
     * @param _stage {createjs.Stage}
     * @param _gameLabel {createjs.Text}
     * @param _startButton {createjs.Bitmap}
     * @param _instructionButton {createjs.Bitmap}
     * @param _exitButton {createjs.Bitmap}
     */
    export class Menu extends scenes.Scene {
        private _blocker: HTMLElement;
        private _stage: createjs.Stage;
        private _gameLabel: createjs.Text;
        private _startButton: createjs.Bitmap;
        private _instructionButton: createjs.Bitmap;
        private _exitButton: createjs.Bitmap;
        private _menubg: createjs.Bitmap;
        private _logo: createjs.Bitmap;

        /**
         * Empty Constructor - calls _initialize and start methods
         * 
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

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++

        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {
            var myIntroBGMusic = createjs.Sound.play("museIntro");
            myIntroBGMusic.play({ interrupt: "none", loop: -1, volume: 1 });

            this.name = "Menu Scene";
            //Background
            this._menubg = new createjs.Bitmap(assets.getResult("Menubg"));
            this._menubg.regX = this._menubg.getBounds().width;
            this._menubg.regY = this._menubg.getBounds().height;
            this._menubg.x = config.Screen.WIDTH;
            this._menubg.y = config.Screen.HEIGHT;
            this._stage.addChild(this._menubg);

            //logo

            this._logo = new createjs.Bitmap(assets.getResult("Logo"));
            this._logo.regX = this._logo.getBounds().width * 0.5;
            this._logo.regY = this._logo.getBounds().height * 0.5;
            this._logo.x = config.Screen.WIDTH * 0.5;
            this._logo.y = (config.Screen.HEIGHT * 0.5) - 200;
            this._stage.addChild(this._logo);

            this._gameLabel = new createjs.Text(
                "THE A-MAZE-ING RACE",
                "80px Century Gothic",
                "#000000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredLineHeight() * 0.5;
            this._gameLabel.x = config.Screen.WIDTH * 0.5;
            this._gameLabel.y = config.Screen.HEIGHT * 0.5;
            this._stage.addChild(this._gameLabel);

            this._startButton = new createjs.Bitmap(assets.getResult("StartButton"));
            this._startButton.regX = this._startButton.getBounds().width * 0.5;
            this._startButton.regY = this._startButton.getBounds().height * 0.5;
            this._startButton.x = config.Screen.WIDTH * 0.5;
            this._startButton.y = (config.Screen.HEIGHT * 0.5) + 250;
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

            this._instructionButton = new createjs.Bitmap(assets.getResult("InstructionsButton"));
            this._instructionButton.regX = this._instructionButton.getBounds().width * 0.5;
            this._instructionButton.regY = this._instructionButton.getBounds().height * 0.5;
            this._instructionButton.x = config.Screen.WIDTH * 0.65;
            this._instructionButton.y = (config.Screen.HEIGHT * 0.5) + 250;
            this._stage.addChild(this._instructionButton);

            this._instructionButton.on("mouseover", (event: createjs.MouseEvent) => {
                event.target.alpha = 0.7;
            });

            this._instructionButton.on("mouseout", (event: createjs.MouseEvent) => {
                event.target.alpha = 1.0;
            });

            this._instructionButton.on("click", (event: createjs.MouseEvent) => {
                currentScene = config.Scene.INSTRUCTIONS;
                myIntroBGMusic.stop();
                changeScene();
            });

            this._exitButton = new createjs.Bitmap(assets.getResult("ExitButton"));
            this._exitButton.regX = this._exitButton.getBounds().width * 0.5;
            this._exitButton.regY = this._exitButton.getBounds().height * 0.5;
            this._exitButton.x =  50;
            this._exitButton.y = (config.Screen.HEIGHT * 0.5) + 400;
            this._stage.addChild(this._exitButton);

            this._exitButton.on("mouseover", (event: createjs.MouseEvent) => {
                event.target.alpha = 0.7;
            });

            this._exitButton.on("mouseout", (event: createjs.MouseEvent) => {
                event.target.alpha = 1.0;
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
            this.simulate();
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