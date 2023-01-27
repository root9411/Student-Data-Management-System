const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    fatherName : {
        type : String,
        require : true
    },
    motherName : {
        type : String,
        require : true
    },
    dob : {
        type: String,
        required: true,
    },
    gender : String,
    phoneNumber : {
        type : Number,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    course : {
        type : String,
        require : true
    },
    amountPaid : {
        type : String,
        require : true
    },
    status : String,


})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;