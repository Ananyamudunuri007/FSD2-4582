"use strict";
var College;
(function (College) {
    class Student {
        name;
        branch;
        constructor(name, branch) {
            this.name = name;
            this.branch = branch;
        }
        display() {
            console.log("Name:", this.name);
            console.log("Branch:", this.branch);
        }
    }
    College.Student = Student;
})(College || (College = {}));
let student = new College.Student("Rahul", "CSE");
student.display();
