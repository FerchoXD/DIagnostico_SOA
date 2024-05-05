import { Request, Response } from "express";
import { AssignSubjectToStudentUseCase } from "../../Application/UseCase/AssignToSubjectToStudentUseCase";

export class AssignToSubjectToStudentController {
    constructor(readonly assignStudentToSubjectUseCase:AssignSubjectToStudentUseCase){}

    async run(req:Request, res:Response){
        const response = await this.assignStudentToSubjectUseCase.run(req.params.student, req.params.subject);
        return res.status(response.status).json(response);
    }
}