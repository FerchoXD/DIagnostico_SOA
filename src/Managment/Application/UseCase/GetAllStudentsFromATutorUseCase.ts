import { ITutor } from "../../Domain/Ports/ITutor";

export class GetAllStudentsFromATutorUseCase {
    constructor(readonly tutorRepository:ITutor){}

    async run(tutor:string){
        return await this.tutorRepository.getAllStudentsFromATutor(tutor);
    }
}