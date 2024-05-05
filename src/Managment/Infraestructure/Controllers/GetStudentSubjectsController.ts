import { Request, Response } from "express";
import { GetStudentSubjectsUseCase } from "../../Application/UseCase/GetStudentSubjectsUseCase";

export class GetStudentSubjectController {
    constructor(readonly getStudentSubjectsUseCase:GetStudentSubjectsUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.getStudentSubjectsUseCase.run(req.params.student);
        return res.status(response.status).json(response);
    }
}