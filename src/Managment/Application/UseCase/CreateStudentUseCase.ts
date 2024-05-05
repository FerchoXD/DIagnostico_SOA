import { IStudent } from "../../Domain/Ports/IEstudiante";

export class CreateStudenUseCase {
    constructor(readonly studentRepository:IStudent){}

    async run(name:string, lastname:string, matricula:string) {
        return await this.studentRepository.createStudent(name, lastname, matricula);
    }
}