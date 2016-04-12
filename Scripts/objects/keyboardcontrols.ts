module objects {
    // KeyboardControls Class +++++++++++++++
    export class KeyboardControls {
        // PUBLIC INSTANCE VARIABLES ++++++++++++
        public moveForward: boolean;
        public moveBackward: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public jump: boolean;
        public enabled: boolean;
        public paused: boolean;
        public switchLevelOne: boolean;
        public switchLevelTwo: boolean;
        public switchLevelThree: boolean;
        public switchMenu: boolean;
        public switchOver: boolean;
        public switchInstructions: boolean;
        // CONSTRUCTOR ++++++++++++++++++++++++++    
        constructor() {
            this.enabled = false;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }

        // PUBLIC METHODS
        
        public onKeyDown(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                    this.moveForward = true;
                    break;
                case 37: /*left arrow*/
                case 65: /* A Key */
                    this.moveLeft = true;
                    break;
                case 40: /*down arrow*/
                case 83: /* S Key */
                    this.moveBackward = true;
                    break;
                case 39: /*right arrow*/
                case 68: /* D Key */
                    this.moveRight = true;
                    break;
                case 32: /* Spacebar */
                    this.jump = true;
                    break;
                case 81: /*pause*/
                    this.paused = (this.paused) ? false : true;
                    break;
                case 49: /*1*/
                case 97: /*numpad 1*/
                    this.switchLevelOne = true;
                    break;
                case 50: /*2*/
                case 98: /*numpad 2*/
                    this.switchLevelTwo = true;
                    break;
                case 51: /*3*/
                case 99: /*numpad 3*/
                    this.switchLevelThree = true;
                    break;
                case 77: /*M=Menu*/
                    this.switchMenu = true;
                    break;
                case 79: /*O=Over*/
                    this.switchOver = true;
                    break;
                case 72: /*H=Instructions*/
                    this.switchInstructions = true;
            }
        }

        public onKeyUp(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                    this.moveForward = false;
                    break;
                case 37: /*left arrow*/
                case 65: /* A Key */
                    this.moveLeft = false;
                    break;
                case 40: /*down arrow*/
                case 83: /* S Key */
                    this.moveBackward = false;
                    break;
                case 39: /*right arrow*/
                case 68: /* D Key */
                    this.moveRight = false;
                    break;
                case 32: /* Spacebar */
                    this.jump = false;
                    break;
            }
        }
    }
}