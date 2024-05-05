import { StudentModel } from "../../../Managment/Infraestructure/Models/MySQL/StudentModel";
import { StudentSubjectModel } from "../../../Managment/Infraestructure/Models/MySQL/StudentSubjectModel";
import { SubjectModel } from "../../../Managment/Infraestructure/Models/MySQL/SubjectModel";
import { TutorModel } from "../../../Managment/Infraestructure/Models/MySQL/TutorModel";
import { TutorStudentModel } from "../../../Managment/Infraestructure/Models/MySQL/TutorStudentModel";

TutorModel.hasMany(TutorStudentModel, { foreignKey: 'tutor_uuid' });
TutorStudentModel.belongsTo(TutorModel, { foreignKey: 'tutor_uuid', onDelete: 'CASCADE' });

StudentModel.hasMany(TutorStudentModel, { foreignKey: 'student_uuid' });
TutorStudentModel.belongsTo(StudentModel, { foreignKey: 'student_uuid', onDelete: 'CASCADE' });

StudentModel.hasMany(StudentSubjectModel, { foreignKey: 'student_uuid' });
StudentSubjectModel.belongsTo(StudentModel, { foreignKey: 'student_uuid', onDelete: 'CASCADE' });

SubjectModel.hasMany(StudentSubjectModel, { foreignKey: 'subject_uuid' });
StudentSubjectModel.belongsTo(SubjectModel, { foreignKey: 'subject_uuid', onDelete: 'CASCADE' });