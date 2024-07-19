import { PhysicObject } from './PhysicObject.js';
import { BaseGravity, Gravity } from '../Forces/Gravity.js';
import { diagonalVector } from '../index.js';

export class Block extends PhysicObject {

    width = 10;
    height = 10;

    constructor(ctx, x, y, mass) {
        super(ctx, x, y, mass);
    }

    render() {
        stroke(0)
        fill(127)
        rect(this.position.x, this.position.y, this.width, this.height);
    }

    handlePossibleCollisions() {
        if (this.position.y + this.height/2 > diagonalVector.y) {
            this.position.y = diagonalVector.y - this.height/2;
            this.movement.y *= -1;
        }
        if (this.position.y - this.height/2 < 0) {
            this.position.y = this.height/2;
            this.movement.y *= -1;
        }
        if (this.position.x + this.width/2 > diagonalVector.x) {
            this.position.x = diagonalVector.x - this.width/2;
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