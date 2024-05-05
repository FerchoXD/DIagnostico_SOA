import { v4 as uuidv4 } from "uuid";

export class Subject {
    uuid:string;
    name:string;

    constructor(name:string) {
        this.uuid = this.generateUuid();
        this.name = name;
    }

    generateUuid():string {
        return uuidv4();
    }
}