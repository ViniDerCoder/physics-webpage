import { Block } from "./Objects/Block.js";
import { Force } from "./Forces/Force.js";
import { Vector } from "./Vector.js";
import { Gravity, setG, setGravity } from "./Forces/Gravity.js";
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

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const mouse = new Vector(0, 0);
    
    document.addEventListener("keydown", function(event) {
        const weight = document.getElementById("weight").value;
        if(event.key === "b") {
            playground.addObject(new Block(mouse.x, mouse.y, parseInt(weight)));
        }
        if(event.key === "s") {
            playground.addObject(new Sphere(mouse.x, mouse.y, parseInt(weight)));
        }
    });

    document.addEventListener("mousemove", function(event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    document.getElementById("clear").addEventListener("click", function() {
        playground.objects = [];
    });

    document.getElementById("g").addEventListener("input", function() {
        setG(parseInt(this.value) / 100);
    });

    document.getElementById("gravity").addEventListener("input", function() {
        setGravity(this.checked);
    });
});

window.setup = setup;
window.preload = preload;