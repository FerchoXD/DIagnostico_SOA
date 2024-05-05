import { Student } from "../../../Domain/Entities/Student";
import { Tutor } from "../../../Domain/Entities/Tutor";
import { ITutor } from "../../../Domain/Ports/ITutor";
import { StudentModel } from "../../Models/MySQL/StudentModel";
import { TutorModel } from "../../Models/MySQL/TutorModel";
import { TutorStudentModel } from "../../Models/MySQL/TutorStudentModel";

export class TutorMySQLRepository implements ITutor {
    async assignAStudentToATutor(tutor: string, studentUUID: string): Promise<any> {
        try {
            const uuid = new Tutor("", "");
            const data = await TutorStudentModel.create({
                uuid: uuid.uuid,
                tutor_uuid: tutor,
                student_uuid: studentUUID
            });
            return {
                status: 201,
                message: 'The student was assigned correctly.'
            }
        } catch (error) {
            return {
                status: 500,
                error: error
            }
        }
    }
    async getAllTutored(): Promise<any | Tutor[]> {
        try {
            const tutored = await TutorModel.findAll();
            return {
                status: 200,
                data: tutored
            }
        } catch (error) {
            return {
                status: 500,
                error: error
            }
        }
    }
    async createTutor(name: string, lastname: string): Promise<any> {
        try {
            const  tutor = new Tutor(name, lastname);
            const tutorData = await TutorModel.create({
                uuid: tutor.uuid,
                name: tutor.name,
                lastname: tutor.lastname
            });
            return {
                status: 201,
                data: tutorData
            }
        } catch (error) {
            return {
                status:500,
                error:error
            }
        }
    }
    async getAllStudentsFromATutor(uuid: string): Promise<any | Student[]> {
        try {
            const students = await TutorStudentModel.findAll({ where: {tutor_uuid: uuid} });

            const studentsData = [];

            for (const student of students) {
                const studentData = await StudentModel.findByPk(student.dataValues.student_uuid);
                studentsData.push(studentData);
            }
            return {
                status: 200,
                data: studentsData
            }
        } catch (error) {
            return {
                status: 500,
                error: error
            }
        }
    }
}