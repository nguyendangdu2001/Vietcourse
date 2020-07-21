import express from "express";
import User from "../models/userModel.js";
import { getToken } from "../util.js";
import passport from 'passport'
import '../passport/passportSetUp.js'

const router = express.Router();
router.post('/google',(req,res)=>{console.log(req.body.access_token);},passport.authenticate("google-oauth-token"),(req,res)=> {
    res.send(req.user)
});
router.post('/facebook',passport.authenticate('facebook-token'),(req,res)=> {
    res.send(req.user)
})
router.post("/local", async (req, res) => {
    const signinUser = await User.findOne({
        userName: req.body.userName,
        password: req.body.password,
    });
    if (signinUser) {
        res.send({
            name: signinUser.name,
            userName: signinUser.userName,
            token: getToken(signinUser),
        });
    } else {
        res.status(401).send({ mes: "invalid email or password" });
    }
});

export default router