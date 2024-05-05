import mongoose, { Schema } from "mongoose";

const SubjectSchema:mongoose.Schema<any> = new Schema({
    uuid: { type: String, require:true, unique:true },
    name: { type: String, require:true, unique:true },
});

const SubjectModel = mongoose.model('Subject', SubjectSchema);
export default SubjectModel;