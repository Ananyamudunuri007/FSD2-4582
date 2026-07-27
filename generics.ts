function displayValue<T>(value: T): void {
    console.log("Value:", value);
}

displayValue<string>("TypeScript");
displayValue<number>(4582);
displayValue<boolean>(true);

class Box<T> {

    item: T;

    constructor(item: T) {
        this.item = item;
    }

    show(): void {
        console.log("Stored Item:", this.item);
    }
}

let studentName = new Box<string>("Ananya");
studentName.show();

let rollNumber = new Box<number>(4582);
rollNumber.show();