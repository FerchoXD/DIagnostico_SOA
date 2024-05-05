import { Student } from "../../Domain/Entities/Student";
import { ITutor } from "../../Domain/Ports/ITutor";

export class AssignStudentToTutorUseCase {
    constructor(readonly tutorRepository:ITutor){}

    async run(tutor:string, student:string){
        return await this.tutorRepository.assignAStudentToATutor(tutor, student);
    }
}