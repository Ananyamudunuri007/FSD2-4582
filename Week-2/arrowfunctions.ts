const welcome = (): void => {
    console.log("Welcome to Full Stack Development Lab!");
};

const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

const studentInfo = (name: string, branch: string): string => {
    return `${name} is studying ${branch}.`;
};

const showCity = (city: string = "Hyderabad"): string => {
    return `City: ${city}`;
};

const hobbies = (...items: string[]): void => {
    console.log("Hobbies:", items.join(", "));
};

welcome();
console.log(greet("Ananya"));
console.log(studentInfo("Rahul", "AI & DS"));
console.log(showCity());
console.log(showCity("Bhimavaram"));
hobbies("Photography", "Coding", "Reading");
