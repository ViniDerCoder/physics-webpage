import { Block } from "./Objects/Block.js";
import { Force } from "./Forces/Force.js";
import { Vector } from "./Vector.js";
import { Gravity } from "./Forces/Gravity.js";
import { PhysicObject } from "./Objects/PhysicObject.js";
import { Sphere } from "./Objects/Sphere.js";

function preload() {
    console.log("p5.js is loaded and ready to go!");
}

export const diagonalVector = new Vector(1800, 900);

export let playground

function setup() {
    createCanvas(diagonalVector.x, diagonalVector.y);
    background(255);

    playground= new Playground();

    console.log(playground);
    
    let ticks = 0;
    setInterval(() => {
        playground.objects.forEach(object => {
            object.tick();
            ticks++;
        });
        playground.objects.forEach(object => {
            playground.objects.forEach(otherObject => {
                if (object !== otherObject) {
                    object.addForce(new Gravity(otherObject, object));
                }
            })
        })
        playground.clear();
        playground.objects.forEach(object => {
            object.render();
        });
    }, 1);
    
    playground.addObject(new Block(20, 20, 80));
    playground.addObject(new Block(40, 40, 200));
    playground.addObject(new Sphere(30, 65, 100));
}

class Playground {
    objects;

    constructor() {
        this.objects = [];
    }

    /**
     * @param {PhysicObject} object 
     */
    addObject(object) {
        this.objects.push(object);
    }

    clear() {
        background(230);
    }
}

window.setup = setup;
window.preload = preload;