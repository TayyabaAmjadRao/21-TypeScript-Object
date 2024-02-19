//Written by TAYYABA RAO
//Date: 18/Feb/2024

import { Console } from "console";

//Object for mobile
class Mobile {
    Model: string;
    Color: string;
    Performance: string;

    constructor(Model: string, Color: string, Performance: string){
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

