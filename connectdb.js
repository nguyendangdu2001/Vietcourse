import mongoose from "mongoose";

const dburl = "mongodb+srv://nguyendangdu2001:yasuo123@cluster0.hhly3.mongodb.net/Bwd2020?retryWrites=true&w=majority";
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if (err) throw err;
    console.log("conncected");
});
