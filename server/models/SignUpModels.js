const mongoose = require ('mongoose')

const signUp = new mongoose.Schema({
    FirstName :
    {
        type : String,
        require : true 
    },
    LastName :{
        type :  String ,
        require : true 
    },
    email:{
        type: String,
        require : true
    },
    password :{
        type : String,
        require : true 
    },
    date:
    {
       type :Date,
       default : Date.now
    }
})

module.exports = mongoose.model('mytable', signUp)