class Student {
    public name: string;
    private rollNo: number;
    protected branch: string;

    constructor(name: string, rollNo: number, branch: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }

    public displayDetails(): void {
        console.log("----- Student Details -----");
        console.log("Name      :", this.name);
        console.log("Roll No   :", this.rollNo);
        console.log("Branch    :", this.branch);
    }
}

class CollegeStudent extends Student {

    showBranch(): void {
        console.log("Branch:", this.branch); // Accessible because branch is protected
    }
}

let student = new CollegeStudent("Ananya", 4582, "AI & DS");

// Accessing public property
console.log("Student Name:", student.name);

student.displayDetails();
student.showBranch();
