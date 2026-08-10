// Program 19: Dynamic URLs using Route Parameters and Query Parameters

import express, { Request, Response } from "express";

const app = express();
const PORT: number = 3000;

// Route parameter
app.get("/student/:rollNo", (req: Request, res: Response): void => {
    const rollNo = String(req.params.rollNo);

    res.send(`Student Roll Number: ${rollNo}`);
});

// Multiple route parameters
app.get("/student/:rollNo/:name", (req: Request, res: Response): void => {
    const rollNo = String(req.params.rollNo);
    const name = String(req.params.name);

    res.send(`Roll No: ${rollNo}, Student Name: ${name}`);
});

// Query parameters
app.get("/search", (req: Request, res: Response): void => {
    const city = String(req.query.city);
    const branch = String(req.query.branch);

    res.send(`Searching students from ${city} studying ${branch}.`);
});

// Start the server
app.listen(PORT, (): void => {
    console.log(`Server is running at http://localhost:${PORT}`);
});