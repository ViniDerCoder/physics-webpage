import { Force } from './Force.js'
import { Vector } from '../Vector.js'
import { decreaseFactor } from '../Objects/PhysicObject.js'

export class Friction extends Force {

    /**
     * @param {Vector} movement 
     * @param {number} frictionCoefficient 
     */
    constructor(movement, frictionCoefficient) {
        super(movement.copy().multiply(-1).normalize().multiply(frictionCoefficient*50000))
    }
    
}