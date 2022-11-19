const mongoose = require('mongoose');

// create student data schema
const studentsSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "name Field Is require"],
        trim : true,
    },
    email : {
        type : String,
        required : [true, "email Field Is require"],
        trim : true,
        unique : true
    },
    call : {
        type : String,
        required : [true, "call Field Is require"],
        trim : true,
    },
    photo : {
        type : String,
        default : 'avatar.png'
    }
},{
    timestamps : true
});



// export model
module.exports = mongoose.model('student', studentsSchema)