const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    version:{
        type: String,
        required: true
    },
    file:{
        data: Buffer,
        type: String
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model("Files", fileSchema)