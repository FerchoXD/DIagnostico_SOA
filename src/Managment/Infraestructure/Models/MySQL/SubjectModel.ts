import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";

export class SubjectModel extends Model {
    uuid!:string;
    name!:string;
}

SubjectModel.init({
    uuid: { type:DataTypes.UUID, defaultValue:DataTypes.UUIDV4, primaryKey:true },
    name: { type:DataTypes.STRING, allowNull:false, unique:true }
}, { sequelize, modelName:'subject' });