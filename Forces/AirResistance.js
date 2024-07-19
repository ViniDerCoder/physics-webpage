import { Force } from './Force.js';

const airDensity = 1.225;

export class AirResistance extends Force {

    constructor(movement, dragCoefficient, area) {
        super(movement.square().multiply(-1/2).multiply(airDensity).multiply(dragCoefficient).multiply(area));
    }
}