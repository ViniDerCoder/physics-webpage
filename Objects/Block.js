import { PhysicObject } from './PhysicObject.js';

export class Block extends PhysicObject {

    width = 10;
    height = 10;

    constructor(ctx, x, y) {
        super(ctx, x, y);
    }

    render() {
        this.canvas.fillStyle = "black";
        this.canvas.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
        this.canvas.fillStyle = "red";
        this.canvas.fillRect(this.x, this.y, 1, 1);
    }

    handlePossibleCollisions() {
        if (this.y + this.height/2 > this.canvas.canvas.height) {
            this.y = this.canvas.canvas.height - this.height/2;
            this.movement.component2 *= -0.5;
        }
        if (this.y < 0) {
            this.y = 0;
            this.movement.component2 *= -0.5;
        }
        if (this.x + this.width/2 > this.canvas.canvas.width) {
            this.x = this.canvas.canvas.width - this.width/2;
            this.movement.component1 *= -0.5;
        }
        if (this.x < 0) {
            this.x = 0;
            this.movement.component1 *= -0.5;
        }
    }
}