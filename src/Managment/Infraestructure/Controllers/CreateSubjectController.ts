import { Request, Response } from "express";
import { CreateSubjectUseCase } from "../../Application/UseCase/CreateSubjectUseCase";

export class CreateSubjectController {
    constructor(readonly createSubjectUseCase:CreateSubjectUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.createSubjectUseCase.run(req.body.name);
        return res.status(response.status).json(response);
    }
}