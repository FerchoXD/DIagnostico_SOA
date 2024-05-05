import mongoose, { Schema } from "mongoose";

const TutorSchema:mongoose.Schema<any> = new Schema({
    uuid: { type: String, require:true, unique:true },
    name: { type: String, require:true },
    lastname: { type: String, require:true },
    students: { type: [String] }
});

const TutorModel = mongoose.model('Tutor', TutorSchema);
export default TutorModel;