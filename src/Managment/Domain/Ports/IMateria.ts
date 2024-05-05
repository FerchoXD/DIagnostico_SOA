import { Subject } from "../Entities/Subject";

export interface ISubject {
    createASubject(name:string):Promise<Subject|any>; // Crear una materia
}