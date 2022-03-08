require('../models/fileUpload')
const mongoose  = require("mongoose");
const multer = require('multer');

const File = mongoose.model("Files");
const storage = multer.diskStorage({
   destination: "./public/",
   filename: function(req, file, cb){
      cb(null,"File-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myfile");

module.exports = upload;
