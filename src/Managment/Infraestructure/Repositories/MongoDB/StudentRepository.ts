import { Document } from "mongoose";
import { Student } from "../../../Domain/Entities/Student";
import { Subject } from "../../../Domain/Entities/Subject";
import { IStudent } from "../../../Domain/Ports/IEstudiante";
import StudentModel from "../../Models/MongoDB/StudentModel";
import SubjectModel from "../../Models/MongoDB/SubjectModel";

export class StudentMongoDBRepository implements IStudent {
    async getAllStudents(): Promise<any | Student[]> {
        try {
            const students = await StudentModel.find({});
            return {
                status: 200,
                data: students
            }
        } catch (error:any) {
            return {
                status: 500, 
                error: error
            }
        }
    }
    async assignASubjectToAStudent(student:string, subject:string): Promise<any> {
        try {
            const studentData = await StudentModel.findOne({ uuid:student });
            if(!studentData){
                return {
                    status:404,
                    message:"The student was not found-"
                }
            }
            const data = studentData.subjects_uuid as string[];
            data.push(subject);
            studentData.subjects_uuid = data;
            await studentData.save();
            return {
                status: 201,
                message: 'The subject was assigned correctly.'
            }
        } catch (error) {
            return {
                status:500,
                error: error
            }
        }
    }

    async createStudent(name: string, lastname: string, matricula: string): Promise<Student|any> {
        try {
            const student:Student = new Student(name, lastname, matricula);
            await StudentModel.create(student);
            return {
                status: 201,
                message: "The student was created successfully."
            }
        } catch (error:any) {
            return {
                status: 500,
                error: error
            }
        }
    }
    async getAllSubjectOfAStudent(uuid: string): Promise<any | Subject[]> {
        try {
            const student:any = await StudentModel.findOne({ uuid:uuid });
            if(!student){
                return {
                    status:404,
                    message:"The student was not found-"
                }
            }
            const subjects: ((Document<unknown, {}, { [x: string]: unknown; }> & { [x: string]: unknown; } & Required<{ _id: unknown; }>) | null)[] = [];
                    
            for (const element of student.subjects_uuid) {
                const subject = await SubjectModel.findOne({ uuid: element });
                subjects.push(subject);
            }

            return {
                status: 200,
                data: subjects
            };
        } catch (error) {
            return {
                status: 500,
                error: error
            }
        }
    }
}