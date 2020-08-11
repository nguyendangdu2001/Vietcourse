import express from "express";
import User from "../models/userModel.js";
import Bill from "../models/billModel.js";
import { getToken } from "../util.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    const newUser = new User({ name: req.body.name, userName: req.body.userName, password: req.body.password });
    const signupUser = await newUser.save();
    if (signupUser) {
        res.send({
            name: signupUser.name,
            userName: signupUser.userName,
            token: getToken(signupUser),
        });
    }
    res.status(401).send({ mes: "invalid user data" });
});
router.get("/logout", (req, res) => {
    req.session = null;
    req.logOut();
    res.sendStatus(204);
});
router.get("/info", (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.status(401).send({ mes: "not loggein" });
    }
});
router.get("/cart", (req, res) => {
    if (!req.user) res.status(401).send({ mes: "not loggedin" });
    User.findById(req.user.id)
        .populate("cart")
        .exec((err, data) => {
            res.send(data.cart);
        });
});

router.post("/addcart", (req, res) => {
    if (!req.user) res.status(401).send({ mes: "Unauthorize" });
    User.findByIdAndUpdate(
        req.user.id,
        { $addToSet: { cart: req.body.courseId } },
        { safe: true, new: true, useFindAndModify: true }
    )
        .exec((err, data) => {
            if (err) res.sendStatus(404);
            res.send(data.cart);
        });
});
router.post("/removecart", (req, res) => {
    if (!req.user) res.status(401).send({ mes: "Unauthorize" });
    User.findByIdAndUpdate(
        req.user.id,
        { $pull: { cart: req.body.courseId } },
        { safe: true, multi: true, new: true, useFindAndModify: true }
    )
        .exec((err, data) => {
            if (err) res.sendStatus(404);
            res.send(data.cart);
        });
});
router.post("/buy", async (req, res) => {
    if (!req.user) res.status(401).send({ mes: "Unauthorize" });
    const newBill = new Bill({
        user: req.user.id,
        courses: req.body.courses,
    });
    try {
        const bill = await newBill.save();
        if (bill) {
            await User.findByIdAndUpdate(
                req.user.id,
                { $addToSet: { ownCourses: { $each: req.body.courses } }, $set: { cart: [] } },
                { useFindAndModify: true },
                (err, user) => {
                    res.sendStatus(204);
                }
            );
        }
    } catch (error) {
        res.status(409).send(error);
    }
});
router.get("/owncourse", (req, res) => {
    if (!req.user) res.status(401).send({ mes: "not loggedin" });
    User.findById(req.user.id)
        .populate("ownCourses")
        .exec((err, data) => {
            if (err) throw err;
            res.send(data.ownCourses);
        });
});

export default router;
