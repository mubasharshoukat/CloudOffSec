const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
router.post('/fileUpload', upload.single('uploaded_file'), function (req, res) {
  console.log('reached');
  res.send('success');
});

module.exports = router;
