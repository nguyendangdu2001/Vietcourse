import mongoose from "mongoose";

const Schema = mongoose.Schema
const userSchema = new mongoose.Schema({
    name: { type: String },
    userName: { type: String },
    password: { type: String },
    role:{type:String},
    userPic: { type: String },
    cart: [{type:Schema.Types.ObjectId, ref: 'Course'}],
    ownCourses:[{type:Schema.Types.ObjectId, ref: 'Course'}],
    google: {
        id: String,
        name: String,
        token: String,
        email: String,
    },
    facebook: {
        id:String,
        name:String,
        token:String,
        email:String
    }
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
