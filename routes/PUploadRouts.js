
const express = require('express');
const router = express.Router();
const Project_UploadController = require('../controller/Project_UploadController')

router.post('/upload',Project_UploadController.uploadAssignment)
module.exports = router;