import { Block } from "./Objects/Block.js";
import { Force } from "./Forces/Force.js";
import { Vector } from "./Vector.js";
import { Gravity } from "./Forces/Gravity.js";

class Playground {
    objects = [];
    canvas;

    constructor() {
        this.canvas = document.getElementsByClassName("playground").item(0);
        if (!this.canvas) {
            throw new Error("Canvas not found");
        } else {
            this.context = this.canvas.getContext('2d');
        }
    }

    addObject(object) {
        this.objects.push(object);
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export const playground = new Playground();

console.log(playground);

let ticks = 0;
setInterval(() => {
    console.log(playground.objects);
    playground.objects.forEach(object => {
        object.tick();
        ticks++;
    });
    playground.clear();
    playground.objects.forEach(object => {
        object.render();
    });
}, 1);

playground.addObject(new Block(playground.context, 20, 20));
playground.objects[0].addForce(new Gravity(1));
playground.addObject(new Block(playground.context, 40, 40));
playground.objects[1].addForce(new Gravity(2));