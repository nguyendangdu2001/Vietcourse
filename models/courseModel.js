import mongoose from "mongoose";
const courseProgress = new mongoose.Schema({
    _id:false,
    title: String,
    totalTime:String,
    chapter: [{ name: String,time:String,_id:false }],
});

const courseShcema = new mongoose.Schema({
    title: { type: String },
    subject:String,
    university:String,
    price: Number,
    rating: Number,
    lecture: String,
    lastModified: {type:Date,default:Date.now()},
    numOfStudent: String,
    detail: [courseProgress],
    pic: String,
});

const courseModel = mongoose.model("Course", courseShcema);
export default courseModel;
