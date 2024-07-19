import { Force } from "../Forces/Force.js";
import { Vector } from "../Vector.js";

const decreaseFactor = 0.01;

export class PhysicObject {
    position = new Vector(0, 0);
    movement = new Vector(0, 0);
    accelaration = new Vector(0, 0);

    mass;
    canvas;


    /**
     * @param {number} x 
     * @param {number} y 
     */

    constructor(ctx, x, y, mass) {
        this.position.x = x;
        this.position.y = y;
        this.mass = mass;

        this.canvas = ctx;
    }

    render() {
        throw new Error("Method not implemented");
    }

    applyForces() {
        throw new Error("Method not implemented");
    }

    tick() {
        this.movement.add(this.accelaration.multiply(decreaseFactor));
        this.position.add(this.movement.multiply(decreaseFactor));
        this.accelaration = new Vector(0, 0);

        this.applyForces();

        this.handlePossibleCollisions();
    }

    handlePossibleCollisions() {
        throw new Error("Method not implemented");
    }

    /**
     * @param {Force} force 
     */
    addForce(force) {
        this.accelaration.add(force.vector.multiply(1/this.mass));
    }
}