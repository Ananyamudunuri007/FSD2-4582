// Program 20: HTTP GET Request Sending JSON

import express, { Request, Response } from "express";

const app = express();
const PORT: number = 3000;

// GET route sending JSON response
app.get("/student", (req: Request, res: Response): void => {

    const student = {
        name: "Ananya",
        rollNo: 4582,
        branch: "AI & DS",
        college: "SVECW",
        skills: ["Python", "TypeScript", "Machine Learning"]
    };

    res.json(student);
});

// Another GET route
app.get("/course", (req: Request, res: Response): void => {

    const course = {
        courseName: "Full Stack Development 2",
        semester: 3,
        language: "TypeScript",
        framework: "Express"
    };

    res.json(course);
});

// Start the server
app.listen(PORT, (): void => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
