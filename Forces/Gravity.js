import { Force } from './Force.js';
import { Vector } from '../Vector.js';

const gravitationalAcceleration = 9.81;

export class Gravity extends Force {

    constructor(mass) {
        super(new Vector(0, gravitationalAcceleration * mass))
    }
}