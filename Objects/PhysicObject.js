

export class PhysicObject {
    x;
    y;
    mass;
    canvas;
    forces = [];

    /**
     * @param {number} x 
     * @param {number} y 
     * @param {number} mass 
     */

    constructor(x, y, mass) {
        this.x = x;
        this.y = y;
        this.mass = mass;

        let canvas = document.getElementsByClassName("playground").item(0);
        if(!canvas) {
            throw new Error("Canvas not found");
        } else {
            this.canvas = canvas.getContext('2d');
        }
    }

    render() {
        throw new Error("Method not implemented");
    }

    tick() {}

    addForce(force) {
        this.forces.push(force);
    }

    applyForces() {
        this.forces.forEach(force => {
            force.apply(this);
        });
    }
}