//Source file name: over.ts
//Authors: Angelina Gutierrez and Elaine Mae Villarino
//Last modified by: 
//Date last modified: 
//Program description: Creates the Game Over scene
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @module scenes
 */
var scenes;
(function (scenes) {
    /**
     * This class instantiates the Game Over scene object
     *
     * @class Over
     * @extends scenes.Scene
     *
     */
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         * Empty constructor
         *
         * @constructor
         */
        function Over() {
            _super.call(this);
            this._initialize();
            this.start();
        }
        Over.prototype._setupCanvas = function () {
            canvas.style.width = "100%";
            canvas.setAttribute("height", config.Screen.HEIGHT.toString());
            canvas.style.backgroundColor = "#ffffff";
        };
        /**
      * This method sets up default values for class member variables
      * and objects
      *
      * @method _initialize
      * @return void
      */
        Over.prototype._initialize = function () {
            // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";
            // setup canvas for menu scene
            this._setupCanvas();
            // setup a stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * The start method is the main method for the scene class
         *
         * @method start
         * @return void
         */
        Over.prototype.start = function () {
            this._gameOverLabel = new createjs.Text("GAME OVER", "80px Consolas", "#000000");
            this._gameOverLabel.regX = this._gameOverLabel.getMeasuredWidth() * 0.5;
            this._gameOverLabel.regY = this._gameOverLabel.getMeasuredLineHeight() * 0.5;
            this._gameOverLabel.x = config.Screen.WIDTH * 0.5;
            this._gameOverLabel.y = config.Screen.HEIGHT * 0.5;
            this._stage.addChild(this._gameOverLabel);
            this._scoreLabel = new createjs.Text("Your Score: " + scoreValue, "40px Consolas", "#000000");
            this._scoreLabel.regX = this._scoreLabel.getMeasuredWidth() * 0.5;
            this._scoreLabel.regY = this._scoreLabel.getMeasuredLineHeight() * 0.5;
            this._scoreLabel.x = config.Screen.WIDTH * 0.5;
            this._scoreLabel.y = config.Screen.HEIGHT * 0.5;
            this._stage.addChild(this._scoreLabel);
            this._highScoreLabel = new createjs.Text("High Score: " + highestScore, "40px Consolas", "#000000");
            this._highScoreLabel.regX = this._highScoreLabel.getMeasuredWidth() * 0.5;
            this._highScoreLabel.regY = this._highScoreLabel.getMeasuredLineHeight() * 0.5;
            this._highScoreLabel.x = config.Screen.WIDTH * 0.5;
            this._highScoreLabel.y = (config.Screen.HEIGHT * 0.5) + 50;
            this._stage.addChild(this._highScoreLabel);
            this._restartButton = new createjs.Bitmap(assets.getResult("RestartButton"));
            this._restartButton.regX = this._restartButton.getBounds().width * 0.5;
            this._restartButton.regY = this._restartButton.getBounds().height * 0.5;
            this._restartButton.x = config.Screen.WIDTH * 0.5;
            this._restartButton.y = (config.Screen.HEIGHT * 0.5) + 100;
            this._stage.addChild(this._restartButton);
            this._restartButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._restartButton.on("mouseout", function (event) {
                event.target.alpha = 1.0;
            });
            this._restartButton.on("click", function (event) {
                currentScene = config.Scene.PLAY;
                changeScene();
            });
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Over.prototype.update = function () {
            this._stage.update();
        };
        /**
        * The resize method is a procedure that sets variables and objects on screen resize
        *
        * @method resize
        * @return void
        */
        Over.prototype.resize = function () {
            this._setupCanvas();
        };
        return Over;
    }(scenes.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));

//# sourceMappingURL=over.js.map
