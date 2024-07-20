

export class Vector {
    x;
    y;

    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    multiply(scalar) {
        this.x *= scalar
        this.y *= scalar
        return this;
    }

    static multiply(vector, scalar) {
        return new Vector(vector.x * scalar, vector.y * scalar);
    }

    add(vector) {
        this.x += vector.x
        this.y += vector.y
        return this;
    }

    static add(vector1, vector2) {
        return new Vector(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    subtract(vector) {
        this.x -= vector.x
        this.y -= vector.y
        return this;
    }

    static subtract(vector1, vector2) {
        return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
    }

    scalarProduct(vector) {
        return this.x * vector.x + this.y * vector.y;
    }

    static scalarProduct(vector) {
        return this.x * vector.y - this.y * vector.x;
    }

    getLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    static getLength(vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    }

    square() {
        this.x *= this.x
        this.y *= this.y
        return this;
    }

    static square(vector) {
        return new Vector(vector.x * vector.x, vector.y * vector.y);
    }

    setMagnitude(magnitude) {
        let length = this.getLength();
        this.x = this.x / length * magnitude;
        this.y = this.y / length * magnitude;
        return this;
    }

    static setMagnitude(vector, magnitude) {
        let length = Vector.getLength(vector);
        return new Vector(vector.x / length * magnitude, vector.y / length * magnitude);
    }

    copy() {
        return new Vector(this.x, this.y);
    }

    static copy(vector) {
        return new Vector(vector.x, vector.y);
    }

    normalize() {
        let length = this.getLength();
        if (length == 0) {
            this.x = 0;
            this.y = 0;
            return this;
        }
        this.x /= length;
        this.y /= length;
        return this;
    }

    static normalize(vector) {
        let length = Vector.getLength(vector);
        return new Vector(vector.x / length, vector.y / length);
    }
}