import { Student } from "../../../Domain/Entities/Student";
import { Subject } from "../../../Domain/Entities/Subject";
import { IStudent } from "../../../Domain/Ports/IEstudiante";
import { StudentModel } from "../../Models/MySQL/StudentModel";
import { StudentSubjectModel } from "../../Models/MySQL/StudentSubjectModel";
import { SubjectModel } from "../../Models/MySQL/SubjectModel";

export class StudentMySQLRepository implements IStudent {
    async getAllStudents(): Promise<any | Student[]> {
        try {
            const students = await StudentModel.findAll();
            return {
                status: 200,
                data: students
            }
        } catch (error) {
            return {
                status:500,
                error: error
            }
        }
    }
    async assignASubjectToAStudent(student:string, subject:string): Promise<any> {
        try {
            const uuid = new Student("", "", "");
            await StudentSubjectModel.create({
                uuid: uuid.uuid,
                student_uuid: student,
                subject_uuid: subject
            });
            return {
                status: 201,
                message: "The subject was assigned correctly."
            }
        } catch (error) {
            return {
                status:500,
                error:error
            }
        }
    }
    async createStudent(name: string, lastname: string, matricula: string): Promise<any> {
        try {
            const student:Student = new Student(name, lastname, matricula);
            await StudentModel.create({
                uuid: student.uuid,
                name: student.name,
                lastname: student.lastname,
                matricula: student.matricula
            })
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
            const subjects = await StudentSubjectModel.findAll({where: { student_uuid:uuid }});
            if(!subjects){
                return {
                    status: 404, 
                    message: "The student was not found."
                }
            }
            const subjectsData = [];
            for (const subject of subjects) {
                const subjectData = await SubjectModel.findByPk(subject.dataValues.subject_uuid)
                subjectsData.push(subjectData);
            }
            return {
                status: 200,
                data: subjectsData
            }
        } catch (error) {
            return {
                status: 500,
                error: error
            }
        }
    }

}