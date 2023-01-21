const express = require('express');
const router = express.Router();
const SignupController = require('../controller/SignupController');
router.post('/signup',SignupController.signup);
router.post('/validate', SignupController.validate);
module.exports =router;
