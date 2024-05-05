import { ISubject } from "../../Domain/Ports/IMateria";

export class CreateSubjectUseCase {
    constructor(readonly subjectRepository:ISubject) {}

    async run(name:string) {
        return await this.subjectRepository.createASubject(name);
    }
}