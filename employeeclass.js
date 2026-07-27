"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayDetails() {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary, department);
    }
    showDepartment() {
        console.log("Department:", this.department); // Accessible (protected)
    }
}
let emp = new Employee("Ananya", 50000, "AI & DS");
emp.displayDetails();
console.log("Employee Name:", emp.name); // Accessible (public)
let manager = new Manager("Rahul", 80000, "Development");
manager.showDepartment();
