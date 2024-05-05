import { Router } from "express";
import { assingStudentToTutorController, createTutorController, getAllStudentsFromATutorController, getAllTutoredController } from "../Dependencies";

const TutorRouter = Router();

// Asignar un alumno a un tutor
TutorRouter.post('/:tutor/students/:student', assingStudentToTutorController.run.bind(assingStudentToTutorController));

// Obtener todos los tutores
TutorRouter.get('', getAllTutoredController.run.bind(getAllTutoredController));

// Crear a un tutor
TutorRouter.post('', createTutorController.run.bind(createTutorController));

// Obtener todos los alumnos de un tutor
TutorRouter.get('/:tutor/students', getAllStudentsFromATutorController.run.bind(getAllStudentsFromATutorController));

export default TutorRouter;