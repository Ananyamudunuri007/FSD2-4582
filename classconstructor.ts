class Student {
    name: string;
    rollNo: number;
    branch: string;

    constructor(name: string, rollNo: number, branch: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }

    displayDetails(): void {
        console.log("----- Student Details -----");
        console.log("Name      :", this.name);
        console.log("Roll No   :", this.rollNo);
        console.log("Branch    :", this.branch);
    }
}

let student1 = new Student("Ananya", 4582, "AI & DS");
let student2 = new Student("Rahul", 4583, "CSE");

student1.displayDetails();
console.log();

student2.displayDetails();