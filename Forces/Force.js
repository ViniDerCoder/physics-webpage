import { Vector } from "../Vector.js";

export class Force {
    vector;

    /**
     * @param {Vector} vector 
     */
    constructor(vector) {
        this.vector = vector;
    }

    prepare() {}

    apply(physicObject, factor, ...prep) {
        this.prepare(...prep);
        physicObject.movement = physicObject.movement.add(this.vector.multiply(factor));
    }
}