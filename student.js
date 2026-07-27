"use strict";
// Module: student.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    name;
    branch;
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Branch: ${this.branch}`);
    }
}
exports.Student = Student;
