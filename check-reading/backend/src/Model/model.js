const mongoose = require('../database/database')

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{data:Buffer,contentType:String},
    finished:{type:Boolean,required:true,default:false},
    createdAt:{type:Date,default:Date.now}
})

const User = mongoose.model('User',UserSchema)
module.exports = User