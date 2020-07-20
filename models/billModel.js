import mongoose from 'mongoose'
const Schema = mongoose.Schema

const billSchema = mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:'User'},
    courses:[{type:Schema.Types.ObjectId,ref:'Course'}],
    buyDate:{type:Date,default:Date.now()}
})

const billModel = mongoose.model('Bill',billSchema)
export default billModel