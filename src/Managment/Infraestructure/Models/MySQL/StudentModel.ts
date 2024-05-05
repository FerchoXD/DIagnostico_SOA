import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";

export class StudentModel extends Model {
    uuid!:string;
    name!:string;
    lastname!:string;
    matricula!:string;
}

StudentModel.init({
    uuid: { type: DataTypes.UUID, defaultValue:DataTypes.UUIDV4, primaryKey:true, allowNull:false },
    name: { type: DataTypes.STRING, allowNull:false },
    lastname: { type: DataTypes.STRING, allowNull:false },
    matricula: { type: DataTypes.STRING, allowNull:false, unique:true }
}, { sequelize, modelName:'student' });