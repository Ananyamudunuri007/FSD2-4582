class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public displayDetails(): void {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number, department: string) {
        super(name, salary, department);
    }

    showDepartment(): void {
        console.log("Department:", this.department); // Accessible (protected)
    }
}

let emp: Employee = new Employee("Ananya", 50000, "AI & DS");
emp.displayDetails();

console.log("Employee Name:", emp.name); // Accessible (public)

let manager: Manager = new Manager("Rahul", 80000, "Development");
manager.showDepartment();