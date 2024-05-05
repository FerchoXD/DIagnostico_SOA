import { Request, Response } from "express";
import { GetAllTutoredUseCase } from "../../Application/UseCase/GetAllTutoredUseCase";

export class GetAllTutoredController {
    constructor(readonly getAllTutoredUseCase:GetAllTutoredUseCase){}

    async run(req:Request, res:Response){
        const response = await this.getAllTutoredUseCase.run();
        return res.status(response.status).json(response);
    }
}