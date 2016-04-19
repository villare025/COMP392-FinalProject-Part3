//Source file name: instructions.ts
//Authors: Angelina Gutierrez and Elaine Mae Villarino
//Last modified by: Angelina Gutierrez
//Date last modified: April 18, 2016
//Program description: Creates the instructions scene
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
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
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        /**
         * @constructor
         */
        function Instructions() {
            _super.call(this);
            this._initialize();
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        Instructions.prototype._setupCanvas = function () {
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
        Instructions.prototype._initialize = function () {
            // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";
            // setup canvas for menu scene
            this._setupCanvas();
            // setup a stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        };
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * The start method is the main method for the scene class
         *
         * @method start
         * @return void
         */
        Instructions.prototype.start = function () {
            var myIntroBGMusic = createjs.Sound.play("museIntro");
            myIntroBGMusic.play({ interrupt: "none", loop: -1, volume: 1 });
            //Background
            this._menubg = new createjs.Bitmap(assets.getResult("Menubg"));
            this._menubg.regX = this._menubg.getBounds().width;
            this._menubg.regY = this._menubg.getBounds().height;
            this._menubg.x = config.Screen.WIDTH;
            this._menubg.y = config.Screen.HEIGHT;
            this._stage.addChild(this._menubg);
            this._gameLabel = new createjs.Text("INSTRUCTIONS", "80px Century Gothic", "#000000");
            this._gameLabel.regX = this._gameLabel.getMeasuredWidth() * 0.5;
            this._gameLabel.regY = this._gameLabel.getMeasuredLineHeight() * 0.5;
            this._gameLabel.x = config.Screen.WIDTH * 0.5;
            this._gameLabel.y = (config.Screen.HEIGHT * 0.5) - 250;
            this._stage.addChild(this._gameLabel);
            //Images
            this._keyboard = new createjs.Bitmap(assets.getResult("Keyboard"));
            this._keyboard.regX = this._keyboard.getBounds().width * 0.5;
            this._keyboard.regY = this._keyboard.getBounds().height * 0.5;
            this._keyboard.x = config.Screen.WIDTH * 0.35;
            this._keyboard.y = (config.Screen.HEIGHT * 0.5) + 40;
            this._stage.addChild(this._keyboard);
            this._spacebar = new createjs.Bitmap(assets.getResult("Spacebar"));
            this._spacebar.regX = this._spacebar.getBounds().width * 0.5;
            this._spacebar.regY = this._spacebar.getBounds().height * 0.5;
            this._spacebar.x = config.Screen.WIDTH * 0.5;
            this._spacebar.y = (config.Screen.HEIGHT * 0.5) + 40;
            this._stage.addChild(this._spacebar);
            this._mouse = new createjs.Bitmap(assets.getResult("Mouse"));
            this._mouse.regX = this._mouse.getBounds().width * 0.5;
            this._mouse.regY = this._mouse.getBounds().height * 0.5;
            this._mouse.x = config.Screen.WIDTH * 0.65;
            this._mouse.y = (config.Screen.HEIGHT * 0.5) + 40;
            this._stage.addChild(this._mouse);
            //Instructions text
            this._instructionsLabel = new createjs.Text("MOVE              JUMP            CAMERA", "30px Century Gothic", "#000000");
            this._instructionsLabel.regX = this._instructionsLabel.getMeasuredWidth() * 0.5;
            this._instructionsLabel.regY = this._instructionsLabel.getMeasuredLineHeight() * 0.5;
            this._instructionsLabel.x = config.Screen.WIDTH * 0.5;
            this._instructionsLabel.y = (config.Screen.HEIGHT * 0.5) - 80;
            this._stage.addChild(this._instructionsLabel);
            this._instructionsLabel2 = new createjs.Text("Get to the exit before the floor reaches the platform!", "40px Century Gothic", "#000000");
            this._instructionsLabel2.regX = this._instructionsLabel2.getMeasuredWidth() * 0.5;
            this._instructionsLabel2.regY = this._instructionsLabel2.getMeasuredLineHeight() * 0.5;
            this._instructionsLabel2.x = config.Screen.WIDTH * 0.5;
            this._instructionsLabel2.y = (config.Screen.HEIGHT * 0.5) + 120;
            this._stage.addChild(this._instructionsLabel2);
            //Buttons
            this._startButton = new createjs.Bitmap(assets.getResult("StartButton"));
            this._startButton.regX = this._startButton.getBounds().width * 0.5;
            this._startButton.regY = this._startButton.getBounds().height * 0.5;
            this._startButton.x = config.Screen.WIDTH * 0.5;
            this._startButton.y = (config.Screen.HEIGHT * 0.5) + 200;
            this._stage.addChild(this._startButton);
            this._startButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._startButton.on("mouseout", function (event) {
                event.target.alpha = 1.0;
            });
            this._startButton.on("click", function (event) {
                currentScene = config.Scene.PLAY;
                myIntroBGMusic.stop();
                changeScene();
            });
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Instructions.prototype.update = function () {
            this._stage.update();
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Instructions.prototype.resize = function () {
            this._setupCanvas();
        };
        return Instructions;
    }(Physijs.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));

//# sourceMappingURL=instructions.js.map
