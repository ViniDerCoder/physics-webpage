

export class Vector {
    component1;
    component2;

    /**
     * @param {number} component1
     * @param {number} component2
     */
    constructor(component1, component2) {
        this.component1 = component1;
        this.component2 = component2;
    }

    multiply(scalar) {
        return new Vector(this.component1 * scalar, this.component2 * scalar);
    }

    add(vector) {
        return new Vector(this.component1 + vector.component1, this.component2 + vector.component2);
    }

    subtract(vector) {
        return new Vector(this.component1 - vector.component1, this.component2 - vector.component2);
    }

    scalarProduct(vector) {
        return this.component1 * vector.component1 + this.component2 * vector.component2;
    }

    getLength() {
        return Math.sqrt(this.component1 * this.component1 + this.component2 * this.component2);
    }
}