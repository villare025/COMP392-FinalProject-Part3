var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    /**
     * The Scene class is a generic / custom Scene container
     *
     * @class Scene
     */
    var Play2 = (function (_super) {
        __extends(Play2, _super);
        /**
         * @constructor
         */
        function Play2() {
            _super.call(this);
        }
        /**
         * The start method is the main method for the scene class
         *
         * @method start
         * @return void
         */
        Play2.prototype.start = function () {
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Play2.prototype.update = function () {
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Play2.prototype.resize = function () {
        };
        return Play2;
    }(Physijs.Scene));
    scenes.Play2 = Play2;
})(scenes || (scenes = {}));

//# sourceMappingURL=play2.js.map
