import { Student } from "../Entities/Student";
import { Subject } from "../Entities/Subject";

export interface IStudent {
    getAllStudents():Promise<Student[]|any>; // Obtener todos los alumnos
    assignASubjectToAStudent(student:string, subject:string):Promise<any>; // Asignar una materia a un alumno
    createStudent(name:string, lastname:string, matricula:string):Promise<Student|any>; // Crear un estudiante
    getAllSubjectOfAStudent(uuid:string):Promise<Subject[]|any>; //Obtener todas las materias de un alumno
}