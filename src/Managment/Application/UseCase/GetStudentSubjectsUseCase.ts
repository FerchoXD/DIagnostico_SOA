import { IStudent } from "../../Domain/Ports/IEstudiante";

export class GetStudentSubjectsUseCase {
    constructor(readonly studentRepository:IStudent){}

    async run(student:string) {
        return this.studentRepository.getAllSubjectOfAStudent(student);
    }
}