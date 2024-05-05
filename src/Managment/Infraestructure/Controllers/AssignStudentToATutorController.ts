import { Request, Response } from "express";
import { AssignStudentToTutorUseCase } from "../../Application/UseCase/AssignStudentToATutorUseCase";

export class AssignStudentToATutorController {
    constructor(readonly assignStudentToATutorUseCase:AssignStudentToTutorUseCase){}

    async run(req:Request, res:Response){
        const response = await this.assignStudentToATutorUseCase.run(req.params.tutor, req.params.student);
        return res.status(response.status).json(response);
    }
}