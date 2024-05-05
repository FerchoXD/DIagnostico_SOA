import { Subject } from "../../../Domain/Entities/Subject";
import { ISubject } from "../../../Domain/Ports/IMateria";
import { SubjectModel } from "../../Models/MySQL/SubjectModel";

export class SubjectMySQLRepository implements ISubject {
    async createASubject(name: string): Promise<any> {
        try {
            const subject =  new Subject(name);
            const subjetcData =  await SubjectModel.create({
                uuid: subject.uuid,
                name: subject.name
            })
            return {
                status: 201,
                message: "Matter was created correctly."
            }
        } catch (error) {
            return {
                status: 500,
                error: error
            }
        }
    }
}