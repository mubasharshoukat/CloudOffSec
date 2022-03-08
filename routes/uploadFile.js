const router = require('express').Router()
require('../middleware/uploadFile')
const obj=require('../controllers/uploadFileCtrl')


router.post("/", obj);

module.exports=router;

