import mongoose from "mongoose";
import express from "express";
import userRoute from "./routes/userRoute.js";
import authRoute from './routes/auth.js'
import courseRoute from './routes/courseRoute.js'
import bodyParser from "body-parser";
import passport from "passport";
import cookieSession from "cookie-session";
import './connectdb.js'
import "./passport/passportSetUp.js";
import Course from './models/courseModel.js'
import path from 'path'

const port = process.env.PORT || 5000
const app = express();
app.use(express.static("build"))
app.use(bodyParser.json());
app.use(cookieSession({
    name:'Vietcouse-server-cookie',
    keys:['dffdfdfdf','dsdss']
}))
app.use(bodyParser.urlencoded({extended:false}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials",true)
    next();
 });



app.use(passport.initialize())
app.use(passport.session())



const isLoggedin = (req, res, next) => {
    if (!req.user) {
        res.sendStatus(401);
    }
    next();
};

app.use("/api/user", userRoute);
app.use("/api/user/auth",authRoute)
app.use('/api/course',courseRoute)

app.post("/google", passport.authenticate("google-oauth-token"),(req,res)=> {
    res.send(req.user)
});

app.get('*',(req,res)=>{
    res.sendfile(path.join("./build", "index.html"))
})

app.listen(port, () => {
    console.log("server is running at port" +port);
});
