const mongoose =require('mongoose');

//destructuring of js (schema ko nikal rhe hai mongoose se)
const {Schema} =mongoose;


const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
           type:String,
           required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
});


module.exports =new mongoose.model('Food',foodSchemaSchema);