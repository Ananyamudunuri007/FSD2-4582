"use strict";
function displayValue(value) {
    console.log("Value:", value);
}
displayValue("TypeScript");
displayValue(4582);
displayValue(true);
class Box {
    item;
    constructor(item) {
        this.item = item;
    }
    show() {
        console.log("Stored Item:", this.item);
    }
}
let studentName = new Box("Ananya");
studentName.show();
let rollNumber = new Box(4582);
rollNumber.show();
