import { PhysicObject } from './PhysicObject.js';
import { BaseGravity } from '../Forces/Gravity.js';
import { diagonalVector } from '../index.js';
import { AirResistance } from '../Forces/AirResistance.js';
import { Friction } from '../Forces/Friction.js';

export class Block extends PhysicObject {

    width = 10;
    height = 10;

    constructor(x, y, mass) {
        super(x, y, mass);
    }

    render() {
        stroke(0)
        fill(127)
        rect(this.position.x - this.width/2, this.position.y - this.height/2, this.width, this.height);
    }

    handlePossibleCollisions() {
        if (this.position.y + this.height/2 > diagonalVector.y) {
            this.position.y = diagonalVector.y - this.height/2;
            this.movement.y *= -1;
            this.addForce(new Friction(this.movement, 0.5));
        }
        if (this.position.y - this.height/2 < 0) {
            this.position.y = this.height/2;
            this.movement.y *= -1;
            this.addForce(new Friction(this.movement, 0.5));
        }
        if (this.position.x + this.width/2 > diagonalVector.x) {
            this.position.x = diagonalVector.x - this.width/2;
            this.movement.x *= -1;
            this.addForce(new Friction(this.movement, 0.5));
        }
        if (this.position.x - this.width/2 < 0) {
            this.position.x = this.width/2;
            this.movement.x *= -1;
            this.addForce(new Friction(this.movement, 0.5));
        }
    }

    applyForces() {
        this.addForce(new BaseGravity({mass: this.mass}));
        this.addForce(new AirResistance(this.movement, 1.28, this.width * this.height));
    }
}