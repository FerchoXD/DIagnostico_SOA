import cors from "cors";
import express from "express";
import StudentRouter from "./Managment/Infraestructure/Routes/StudentRouter";
import SubjectRouter from "./Managment/Infraestructure/Routes/SubjectRouter";
import TutorRouter from "./Managment/Infraestructure/Routes/TutorRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/students", StudentRouter);
app.use("/api/v1/subjects", SubjectRouter);
app.use("/api/v1/tutored", TutorRouter);

const port:string = process.env.PORT || '3000';

app.listen(port, () => {
    console.log(`SERVER RUNNING IN http://localhost:${port}.`);
});