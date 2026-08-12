namespace College {

    export class Student {

        constructor(
            public name: string,
            public branch: string
        ) {}

        display(): void {
            console.log("Name:", this.name);
            console.log("Branch:", this.branch);
        }
    }
}

let student = new College.Student("Rahul", "CSE");
student.display();
