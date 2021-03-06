//Source file name: over.ts
//Authors: Angelina Gutierrez and Elaine Mae Villarino
//Last modified by: Angelina Gutierrez
//Date last modified: April 18, 2016
//Program description: Creates the Game Over scene

/**
 * @module scenes
 */
module scenes {
    /**
     * This class instantiates the Game Over scene object
     * 
     * @class Over
     * @extends scenes.Scene
     * 
     */
    export class Over extends scenes.Scene {

        private _blocker: HTMLElement;
        private _stage: createjs.Stage;
        private _scoreLabel: createjs.Text;
        private _highScoreLabel: createjs.Text;
        private _restartLabel: createjs.Text;
        private _gameOverLabel: createjs.Text;
        private _restartButton: createjs.Bitmap;
        private _overbg: createjs.Bitmap;

        /**
         * Empty constructor
         * 
         * @constructor
         */
        constructor() {
            super();
            this._initialize();
            this.start();
        }


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
            var myOverBGMusic = createjs.Sound.play("museOver");
            
            //Background
            
             this._overbg = new createjs.Bitmap(assets.getResult("Overbg"));
            this._overbg.regX = this._overbg.getBounds().width;
            this._overbg.regY = this._overbg.getBounds().height;
            this._overbg.x = config.Screen.WIDTH; 
            this._overbg.y = config.Screen.HEIGHT;
            this._stage.addChild(this._overbg);
            
            myOverBGMusic.play({ interrupt: "none", loop: -1, volume: 1 });
            this._gameOverLabel = new createjs.Text(
                "GAME OVER",
                "80px Century Gothic",
                "#000000");
            this._gameOverLabel.regX = this._gameOverLabel.getMeasuredWidth() * 0.5;
            this._gameOverLabel.regY = this._gameOverLabel.getMeasuredLineHeight() * 0.5;
            this._gameOverLabel.x = config.Screen.WIDTH * 0.5;
            this._gameOverLabel.y = (config.Screen.HEIGHT * 0.5) - 200;
            this._stage.addChild(this._gameOverLabel);

            this._scoreLabel = new createjs.Text(
                "Your Score: " + scoreValue,
                "40px Century Gothic",
                "#000000");
            this._scoreLabel.regX = this._scoreLabel.getMeasuredWidth() * 0.5;
            this._scoreLabel.regY = this._scoreLabel.getMeasuredLineHeight() * 0.5;
            this._scoreLabel.x = config.Screen.WIDTH * 0.5;
            this._scoreLabel.y = config.Screen.HEIGHT * 0.5;
            this._stage.addChild(this._scoreLabel);

            this._highScoreLabel = new createjs.Text(
                "High Score: " + highestScore,
                "40px Century Gothic",
                "#000000");
            this._highScoreLabel.regX = this._highScoreLabel.getMeasuredWidth() * 0.5;
            this._highScoreLabel.regY = this._highScoreLabel.getMeasuredLineHeight() * 0.5;
            this._highScoreLabel.x = config.Screen.WIDTH * 0.5;
            this._highScoreLabel.y = (config.Screen.HEIGHT * 0.5) + 50;
            this._stage.addChild(this._highScoreLabel);
            
            this._restartLabel = new createjs.Text(
                "Try again?",
                "20px Century Gothic",
                "#000000"
            );
            this._restartLabel.regX = this._restartLabel.getMeasuredWidth() * 0.5;
            this._restartLabel.regY = this._restartLabel.getMeasuredLineHeight() * 0.5;
            this._restartLabel.x = config.Screen.WIDTH * 0.5;
            this._restartLabel.y = (config.Screen.HEIGHT * 0.5) + 400;
            this._stage.addChild(this._restartLabel);

            this._restartButton = new createjs.Bitmap(assets.getResult("RestartButton"));
            this._restartButton.regX = this._restartButton.getBounds().width * 0.5;
            this._restartButton.regY = this._restartButton.getBounds().height * 0.5;
            this._restartButton.x = config.Screen.WIDTH * 0.5;
            this._restartButton.y = (config.Screen.HEIGHT * 0.5) + 250;
            this._stage.addChild(this._restartButton);

            this._restartButton.on("mouseover", (event: createjs.MouseEvent) => {
                event.target.alpha = 0.7;
            });

            this._restartButton.on("mouseout", (event: createjs.MouseEvent) => {
                event.target.alpha = 1.0;
            });

            this._restartButton.on("click", (event: createjs.MouseEvent) => {
                scoreValue = 0;
                livesValue = 5
                bonusValue = 9999;
                currentScene = config.Scene.PLAY;
                myOverBGMusic.stop();
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