const express = require("express");
const router = express.Router();
const employeeController = require('../controller/EmployeeController');
router.post('/employee',employeeController.createEmployee)
router.get('/employee',employeeController.getAllEmployee)
router.post('/employee/bulk',employeeController.insertBulkEmployee)
module.exports = router;