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
    fileImage:{
        type: [String],
        required: true
    }
    
}, {
    timestamps: true
})

const Files = mongoose.model("Files", fileSchema);
module.exports = Files;