import { v4 as uuidv4 } from "uuid";

export class Tutor {
    uuid:string;
    name:string;
    lastname:string;

    constructor(name:string, lastname:string){
        this.uuid = this.generateUuid();
        this.name = name;
        this.lastname = lastname;
    }

    generateUuid():string {
        return uuidv4();
    }
}