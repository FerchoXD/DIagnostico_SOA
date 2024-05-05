import { IStudent } from "../../Domain/Ports/IEstudiante";

export class AssignSubjectToStudentUseCase {
    constructor(readonly studentRepository:IStudent){}

    async run(student:string, subject:string){
        return await this.studentRepository.assignASubjectToAStudent(student, subject);
    }
}