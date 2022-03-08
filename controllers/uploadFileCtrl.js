require('../middleware/uploadFile')
require('../models/fileUpload')

const obj = (req, res) => {
    upload(req, res, () => {
        console.log("Request ---", req.body);
      console.log("Request file ---", req.file);//Here you get file.
      const file = new File();
      file.meta_data = req.file;
      file.save().then(()=>{
      res.send({message:"uploaded successfully"})
    })
})
}
module.exports=obj;