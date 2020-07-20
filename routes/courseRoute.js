import express from "express";
import User from "../models/userModel.js";
import { getToken } from "../util.js";
import Course from "../models/courseModel.js";

const router = express.Router();

router.get('/get/:id',(req,res)=>{
    const course = Course.findById(req.params.id,(err,data)=>{
        if(err) res.status(404).send({msg:'Not found'})
        res.send(data)
    })
})
router.get('/get',(req,res)=> {
    const listCourse = Course.find({},{_id:1,title:1,university:1,pic:1},(err,data)=>{
        if(err) res.status(404).send({msg:'Not found'})
        res.send(data)
    })
})

export default router