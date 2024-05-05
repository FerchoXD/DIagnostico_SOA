import { ITutor } from "../../Domain/Ports/ITutor";

export class GetAllTutoredUseCase {
    constructor(readonly tutorRepository:ITutor){}

    async run() {
        return await this.tutorRepository.getAllTutored();
    }
}