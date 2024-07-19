import { Force } from './Force.js';
import { Vector } from '../Vector.js';
import { PhysicObject } from '../Objects/PhysicObject.js';

const gravitationalAcceleration = 9.81;
const G = 1;

export class BaseGravity extends Force {

    /**
     * @param {{mass: number}} param0 
     */
    constructor({mass}) {
        super(new Vector(0, gravitationalAcceleration * mass))
    }
}

export class Gravity extends Force {
    
    /**
     * 
     * @param {PhysicObject} attractor 
     * @param {PhysicObject} object 
     */
    constructor(attractor, object) {
        let force = new Force(Vector.subtract(attractor.position, object.position));

        let d = force.vector.getLength();
        if(d < 5) d = 5
        if(d > 25) d = 25

        let strength = (G * (attractor.mass * object.mass)) / Math.pow(d, 2);
        force.vector.setMagnitude(strength);
        super(force.vector);
    }
}