// Program 22: Custom Middleware and Logging

import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT: number = 3000;

// Custom logging middleware
const requestLogger = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {

    const currentTime: string = new Date().toLocaleTimeString();

    console.log(
        `[${currentTime}] ${req.method} request received for ${req.url}`
    );

    next();
};

// Register custom middleware
app.use(requestLogger);

// Home route
app.get("/", (req: Request, res: Response): void => {
    res.send("Welcome to the Express Server!");
});

// Student route
app.get("/student", (req: Request, res: Response): void => {
    res.json({
        name: "Ananya",
        rollNo: 4582,
        branch: "AI & DS"
    });
});

// About route
app.get("/about", (req: Request, res: Response): void => {
    res.send("This is the About page.");
});

// Start the server
app.listen(PORT, (): void => {
    console.log(`Server is running at http://localhost:${PORT}`);
});