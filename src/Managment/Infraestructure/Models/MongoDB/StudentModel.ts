import mongoose, { Schema } from "mongoose";

const StudentSchema:mongoose.Schema<any> = new Schema({
    uuid: { type: String, require:true, unique:true },
    name: { type: String, require:true },
    lastname: { type: String, require:true },
    matricula: { type: String, require:true, unique:true },
    tutored_uuid: { type:[String], require:false },
    subjects_uuid: { type:[String], require:false }
});

const StudentModel = mongoose.model('Student', StudentSchema);
export default StudentModel;