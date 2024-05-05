import { Request, Response } from "express";
import { CreateStudenUseCase } from "../../Application/UseCase/CreateStudentUseCase";

export class CreateStudentController {
    constructor(readonly createStudentUseCase:CreateStudenUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.createStudentUseCase.run(req.body.name, req.body.lastname, req.body.matricula);
        return res.status(response.status).json(response);
    }
}