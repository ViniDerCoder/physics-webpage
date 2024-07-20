import { Force } from './Force.js';
import { Vector } from '../Vector.js';

const airDensity = 1.225;

export class AirResistance extends Force {

    /**
     * @param {Vector} movement 
     * @param {number} dragCoefficient 
     * @param {number} area
     */
    constructor(movement, dragCoefficient, area) {

        super(movement.copy().multiply(-1/2).normalize().multiply(dragCoefficient).multiply(movement.getLength() * movement.getLength()).multiply(0.005));
    }
}