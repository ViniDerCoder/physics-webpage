import { Vector } from "./Vector.js";

export class Force {
    vector;

    /**
     * @param {Vector} vector 
     */
    constructor(vector) {
        this.vector = vector;
    }

    apply(physicObject) {
        physicObject.x += this.vector.component1;
        physicObject.y += this.vector.component2;
    }
}