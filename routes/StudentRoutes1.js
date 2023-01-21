const express = require('express');
const router = express.Router();
const StudentController1 = require('../controller/StudentController1');
const StudentSchema1ValidationUtil = require('../util/StudentSchema1ValidationUtil');
const validate  = require('../middleware/ZodMiddleware');

router.post('/students',validate(StudentSchema1ValidationUtil),StudentController1.createStudent1);

module.exports = router;