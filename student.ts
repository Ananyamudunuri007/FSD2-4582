// Module: student.ts

export class Student {
    name: string;
    branch: string;

    constructor(name: string, branch: string) {
        this.name = name;
        this.branch = branch;
    }

    display(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Branch: ${this.branch}`);
    }
}