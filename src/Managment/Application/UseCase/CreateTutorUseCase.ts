import { ITutor } from "../../Domain/Ports/ITutor";

export class CreateTutorUseCase {
    constructor(readonly tutorRepository:ITutor){}

    async run(name:string, lastname:string){
        return await this.tutorRepository.createTutor(name, lastname);
    }
}