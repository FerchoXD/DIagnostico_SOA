import { v4 as uuidv4 } from "uuid";

export class Student {
    uuid:string;
    name:string;
    lastname:string;
    matricula:string;

    constructor(name:string, lastname:string, matricula:string) {
        this.uuid = this.generateUuid();
        this.name = name;
        this.lastname = lastname;
        this.matricula = matricula;
    }

    generateUuid():string {
        return uuidv4();
    }
}