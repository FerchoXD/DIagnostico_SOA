import { Request, Response } from "express";
import { GetAllStudentsUseCase } from "../../Application/UseCase/GetAllStudentsUseCase";

export class GetAllStudentsController {
    constructor(readonly getAllStudentUseCase:GetAllStudentsUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.getAllStudentUseCase.run();
        return res.status(response.status).json(response);
    }
}