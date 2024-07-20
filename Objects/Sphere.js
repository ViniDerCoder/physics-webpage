import { PhysicObject } from './PhysicObject.js';
import { BaseGravity } from '../Forces/Gravity.js';
import { Friction } from '../Forces/Friction.js';
import { diagonalVector } from '../index.js';
import { AirResistance } from '../Forces/AirResistance.js';

export class Sphere extends PhysicObject {

    radius = 5;

    constructor(x, y, mass) {
        super(x, y, mass);
    }

    render() {
        stroke(0)
        fill(127)
        circle(this.position.x, this.position.y, this.radius * 2);
    }

    handlePossibleCollisions() {
        if(this.position.x + this.radius > diagonalVector.x) {
            this.position.x = diagonalVector.x - this.radius
            this.movement.x *= -1
            this.addForce(new Friction(this.movement, 0.1));
        }
        if (this.position.x - this.radius < 0 || this.position.x + this.radius > diagonalVector.x) {
            this.movement.x *= -1;
            this.position.x = this.radius
            this.addForce(new Friction(this.movement, 0.1));
        }
        if(this.position.y + this.radius > diagonalVector.y) {
            this.position.y = diagonalVector.y - this.radius
            this.movement.y *= -1
            this.addForce(new Friction(this.movement, 0.1));
        }
        if (this.position.y - this.radius < 0) {
            this.movement.y *= -1
            this.position.y = this.radius
            this.addForce(new Friction(this.movement, 0.1));
        }
    }

    applyForces() {
        this.addForce(new BaseGravity({mass: this.mass}));
        this.addForce(new AirResistance(this.movement, 1.28, Math.PI * Math.pow(this.radius, 2)));
    }
}