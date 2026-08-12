class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}

let numberBox: Box<number> = new Box<number>(100);
let stringBox: Box<string> = new Box<string>("Hello TypeScript");
let booleanBox: Box<boolean> = new Box<boolean>(true);

numberBox.display();
stringBox.display();
booleanBox.display();
