import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";

export class TutorModel extends Model {
    uuid!:string;
    name!:string;
    lastname!:string;
}

TutorModel.init({
    uuid: { type:DataTypes.UUID, defaultValue:DataTypes.UUIDV4, primaryKey:true },
    name: { type: DataTypes.STRING, allowNull:false },
    lastname: { type: DataTypes.STRING, allowNull:false },
}, { sequelize,  modelName:'tutor'});