//Source file name: menu.ts
//Authors: Angelina Gutierrez and Elaine Mae Villarino
//Last modified by: Angelina Gutierrez
//Date last modified: April 06, 2016
//Program description: Creates the menu scene
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
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Empty Constructor - calls _initialize and start methods
         *
         * @constructor
         */
        function Menu() {
            _super.call(this);
            this._initialize();
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype._setupCanvas = function () {
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
        Menu.prototype._initialize = function () {
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
        Menu.prototype.start = function () {
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
            this._gameLabel = new createjs.Text("THE A-MAZE-ING RACE", "80px Century Gothic", "#000000");
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
            this._instructionButton = new createjs.Bitmap(assets.getResult("InstructionsButton"));
            this._instructionButton.regX = this._instructionButton.getBounds().width * 0.5;
            this._instructionButton.regY = this._instructionButton.getBounds().height * 0.5;
            this._instructionButton.x = config.Screen.WIDTH * 0.65;
            this._instructionButton.y = (config.Screen.HEIGHT * 0.5) + 250;
            this._stage.addChild(this._instructionButton);
            this._instructionButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._instructionButton.on("mouseout", function (event) {
                event.target.alpha = 1.0;
            });
            this._instructionButton.on("click", function (event) {
                currentScene = config.Scene.INSTRUCTIONS;
                myIntroBGMusic.stop();
                changeScene();
            });
            this._exitButton = new createjs.Bitmap(assets.getResult("ExitButton"));
            this._exitButton.regX = this._exitButton.getBounds().width * 0.5;
            this._exitButton.regY = this._exitButton.getBounds().height * 0.5;
            this._exitButton.x = 50;
            this._exitButton.y = (config.Screen.HEIGHT * 0.5) + 400;
            this._stage.addChild(this._exitButton);
            this._exitButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._exitButton.on("mouseout", function (event) {
                event.target.alpha = 1.0;
            });
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Menu.prototype.update = function () {
            this._stage.update();
            this.simulate();
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Menu.prototype.resize = function () {
            this._setupCanvas();
        };
        return Menu;
    }(scenes.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
