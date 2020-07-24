import express from "express";
import User from "../models/userModel.js";
import { getToken } from "../util.js";
import Course from "../models/courseModel.js";

const router = express.Router();
const map = {
    mythuat: "Mỹ thuật",
    cntt: "Công nghệ thông tin",
    amnhac: "Âm nhạc",
    nhiepanh: "Nhiếp ảnh",
    kinhdoanh: "Kinh doanh",
};

router.get("/get/:id", (req, res) => {
    const course = Course.findById(req.params.id, (err, data) => {
        if (err) res.status(404).send({ msg: "Not found" });
        res.send(data);
    });
});
router.get("/get/linhvuc/:linhvuc", (req, res) => {
    const course = Course.find({ subject: map[req.params.linhvuc] }, (err, data) => {
        if (err) res.status(404).send({ msg: "Not found" });
        res.send(data);
    });
});
router.get("/seach/:key", (req, res) => {
    const course = Course.find(
        {
            $or: [
                { title: { $regex: req.params.key, $options: "i" } },
                { lecture: { $regex: req.params.key, $options: "i" } },
                { university: { $regex: req.params.key, $options: "i" } },
            ],
        },
        { pic: 1, title: 1, university: 1 },
        { limit: 5 },
        (err, data) => {
            if (err) {
                res.status(404).send({ msg: "Not found" });
                console.log(err);
            }
            res.send(data);
        }
    );
});
router.get("/get", (req, res) => {
    const listOwncourse = req.user ? req.user.ownCourses : [];
    const listCourse = Course.find(
        { _id: { $nin: listOwncourse } },
        { _id: 1, title: 1, university: 1, pic: 1 },
        { limit: 20 },
        (err, data) => {
            if (err) res.status(404).send({ msg: "Not found" });
            res.send(data);
        }
    );
});

export default router;
