import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";

export class TutorStudentModel extends Model {
    uuid!:string;
    tutor_uuid!:string;
    student_uuid!:string;
}

TutorStudentModel.init({
    uuid: { type:DataTypes.UUID, defaultValue:DataTypes.UUIDV4, primaryKey:true },
}, { sequelize, modelName:'tutorstudent' });