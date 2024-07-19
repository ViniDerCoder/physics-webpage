import { Vector } from "../Vector.js";

const decreaseFactor = 0.01;

export class PhysicObject {
    x;
    y;
    canvas;
    forces = [];
    movement = new Vector(0, 0);

    /**
     * @param {number} x 
     * @param {number} y 
     */

    constructor(ctx, x, y) {
        this.x = x;
        this.y = y;

        this.canvas = ctx;
    }

    render() {
        throw new Error("Method not implemented");
    }

    tick() {
        this.applyForces(decreaseFactor);
        this.x += this.movement.component1 * decreaseFactor;
        this.y += this.movement.component2 * decreaseFactor;
        this.handlePossibleCollisions();
    }

    handlePossibleCollisions() {
        throw new Error("Method not implemented");
    }

    addForce(force) {
        this.forces.push(force);
    }

    applyForces(factor) {
        this.forces.forEach(force => {
            force.apply(this, factor);
        });
    }
}