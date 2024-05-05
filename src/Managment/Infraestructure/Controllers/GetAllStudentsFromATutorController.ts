import { Request, Response } from "express";
import { GetAllStudentsFromATutorUseCase } from "../../Application/UseCase/GetAllStudentsFromATutorUseCase";

export class GetAllStudentsFromATutorController {
    constructor(readonly getAllStudentsFromATutor:GetAllStudentsFromATutorUseCase){}

    async run(req:Request, res:Response){
        const response = await this.getAllStudentsFromATutor.run(req.params.tutor);
        return res.status(response.status).json(response);
    }
}