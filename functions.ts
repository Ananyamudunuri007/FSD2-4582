function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

function showCity(name: string, city: string = "Hyderabad"): string {
    return `${name} is from ${city}.`;
}

function studentDetails(name: string, branch?: string): string {
    if (branch) {
        return `${name} studies ${branch}.`;
    }
    return `${name}'s branch is not specified.`;
}
// Function with rest parameters
function hobbies(name: string, ...items: string[]): string {
    return `${name}'s hobbies are: ${items.join(", ")}`;
}

console.log(greet("Ananya"));

console.log(showCity("Rahul"));
console.log(showCity("Sneha", "Bhimavaram"));

console.log(studentDetails("Kiran"));
console.log(studentDetails("Meghana", "AI & DS"));

console.log(hobbies("Ananya", "Photography", "Coding", "Travelling"));