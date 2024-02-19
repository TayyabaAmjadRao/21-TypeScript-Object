"use strict";
//Written by TAYYABA RAO
//Date: 18/Feb/2024
Object.defineProperty(exports, "__esModule", { value: true });
//Object for mobile
class Mobile {
    constructor(Model, Color, Performance) {
        this.Model = Model;
        this.Color = Color;
        this.Performance = Performance;
    }
}
//INSTANCE FOR MOBILR
const Samsung = new Mobile("S9", "Black", "Bad");
const Iphone = new Mobile("Iphone 14 pro", "Purple", "Good");
const Tecno = new Mobile("Camon 20", "blue", "Good");
//Print information about the mobile
console.log(Samsung);
console.log(Iphone);
console.log(Tecno);
