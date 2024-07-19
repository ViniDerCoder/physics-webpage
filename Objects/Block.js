import { PhysicObject } from './PhysicObject.js';
import { Gravity } from '../Forces/Gravity.js';

export class Block extends PhysicObject {

    width = 10;
    height = 10;

    constructor(ctx, x, y, mass) {
        super(ctx, x, y, mass);
    }

    render() {
        this.canvas.fillStyle = "black";
        this.canvas.fillRect(Math.round(this.position.x - this.width/2), Math.round(this.position.y - this.height/2), this.width, this.height);
        this.canvas.fillStyle = "red";
        this.canvas.fillRect(this.position.x, this.position.y, 1, 1);
    }

    handlePossibleCollisions() {
        if (this.position.y + this.height/2 > this.canvas.canvas.height) {
            this.position.y = this.canvas.canvas.height - this.height/2;
            this.movement.y *= -0.5;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
            this.movement.y *= -0.5;
        }
        if (this.position.x + this.width/2 > this.canvas.canvas.width) {
            this.position.x = this.canvas.canvas.width - this.width/2;
            this.movement.x *= -0.5;
        }
        if (this.position.x < 0) {
            this.position.x = 0;
            this.movement.x *= -0.5;
        }
    }

    applyForces() {
        this.addForce(new Gravity({mass: this.mass}));
    }
}