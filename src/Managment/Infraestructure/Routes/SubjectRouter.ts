import { Router } from "express";
import { createSubjectController } from "../Dependencies";

const SubjectRouter = Router();

// Crear una materia
SubjectRouter.post('', createSubjectController.run.bind(createSubjectController));

export default SubjectRouter;