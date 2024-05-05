import { Student } from "../Entities/Student";
import { Tutor } from "../Entities/Tutor";

export interface ITutor {
    assignAStudentToATutor(uuid:string, studentUUID:string):Promise<Student|any>; // Asignar un estudiante a un tutor
    getAllTutored():Promise<Tutor[]|any>; // Obtener todos los tutorados
    createTutor(name:string, lastname:string):Promise<Tutor|any>; // Crear un tutor
    getAllStudentsFromATutor(uuid:string):Promise<Student[]|any>; // Obtener todos los estudiantes de un tutor
}