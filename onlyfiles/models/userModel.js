const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    branch:{
        type: String,
        require: true
    },
    rollno:{
        type: String,
        require: true,
    },
    age:{
        type: Number,
        require: true,
    },
    mobile:{
        type: Number,
        require: true,
    },
})

module.exports = mongoose.model('userData',userSchema);