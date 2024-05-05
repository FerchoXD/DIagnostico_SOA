import { Request, Response } from "express";
import { CreateTutorUseCase } from "../../Application/UseCase/CreateTutorUseCase";

export class CreateTutorController {
    constructor(readonly createTutorUseCase:CreateTutorUseCase){}

    async run(req:Request, res:Response){
        const response = await this.createTutorUseCase.run(req.body.name, req.body.lastname);
        return res.status(response.status).json(response);
    }
}