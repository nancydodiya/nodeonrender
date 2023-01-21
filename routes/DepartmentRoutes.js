const express = require('express');
const router = express.Router();
const departmentController = require('../controller/DepartmentController');
router.post('/create', departmentController.createDepartment);

module.exports = router;