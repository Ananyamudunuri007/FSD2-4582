// Program 21: HTTP PUT, POST, DELETE with JSON and Dynamic URLs

import express, { Request, Response } from "express";

const app = express();
const PORT: number = 3000;

// Middleware to receive JSON data
app.use(express.json());

// Sample student data
let students = [
    {
        id: 1,
        name: "Ananya",
        branch: "AI & DS"
    },
    {
        id: 2,
        name: "Rahul",
        branch: "CSE"
    }
];

// GET - Send all students as JSON
app.get("/students", (req: Request, res: Response): void => {
    res.json(students);
});

// GET - Dynamic URL using route parameter
app.get("/students/:id", (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);

    const student = students.find((student) => student.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

// POST - Receive JSON and add a new student
app.post("/students", (req: Request, res: Response): void => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        branch: req.body.branch
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// PUT - Update student using dynamic URL
app.put("/students/:id", (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);

    const student = students.find((student) => student.id === id);

    if (student) {
        student.name = req.body.name;
        student.branch = req.body.branch;

        res.json({
            message: "Student updated successfully",
            student: student
        });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

// DELETE - Delete student using dynamic URL
app.delete("/students/:id", (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);

    const index = students.findIndex((student) => student.id === id);

    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);

        res.json({
            message: "Student deleted successfully",
            student: deletedStudent[0]
        });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

// Start the server
app.listen(PORT, (): void => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
