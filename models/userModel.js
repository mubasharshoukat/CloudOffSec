const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password:{
        type: String, 
        required: [true, "Please enter your password!"]
    },
    role:{
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar:{
        type: String,
        default: "https://rightpeoplegroup.com/wp-content/uploads/2020/02/service_default_avatar_182956.png"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)