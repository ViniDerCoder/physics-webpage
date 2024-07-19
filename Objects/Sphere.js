import { PhysicObject } from './PhysicObject.js';
import { BaseGravity } from '../Forces/Gravity.js';

export class Sphere extends PhysicObject {

    radius = 5;

    constructor(ctx, x, y, mass) {
        super(ctx, x, y, mass);
    }

    render() {
        this.canvas.fillStyle = "black";
        this.canvas.
        this.canvas.fillStyle = "red";
        this.canvas.fillRect(this.position.x, this.position.y, 1, 1);
    }

    handlePossibleCollisions() {
        if (this.position.y + this.height/2 > this.canvas.canvas.height) {
            this.position.y = this.canvas.canvas.height - this.height/2;
            this.movement.y *= -1;
        }
        if (this.position.y - this.height/2 < 0) {
            this.position.y = this.height/2;
            this.movement.y *= -1;
        }
        if (this.position.x + this.width/2 > this.canvas.canvas.width) {
            this.position.x = this.canvas.canvas.width - this.width/2;
            this.movement.x *= -1;
        }
        if (this.position.x - this.width/2 < 0) {
            this.position.x = this.width/2;
            this.movement.x *= -1;
        }
    }

    applyForces() {
        this.addForce(new BaseGravity({mass: this.mass}));
    }
}