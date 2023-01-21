const express = require("express");
const app = express();
const router = express.Router();
const studentController = require("../controller/StudentController");

router.post('/student', studentController.createStudent)
router.post('/forget', studentController.forgetPass)
router.get('/student',studentController.getallStudents)
router.delete('/student/:id',studentController.deleteStudent)
router.put('/student/:id',studentController.updateStudent)
router.get('/student/:id',studentController.getstudentsById)
module.exports = router;