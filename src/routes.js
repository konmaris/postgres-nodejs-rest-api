const { Router } = require("express");
const router = Router();

const controller = require("./controller");

router.get("/schools", controller.getSchools);
router.get("/schools/:id", controller.getSchoolById);
router.post("/schools", controller.insertSchool);
router.delete("/schools/:id", controller.deleteSchool);

router.get("/majors", controller.getMajors);
router.get("/majors/:id", controller.getMajorById);
router.post("/majors", controller.insertMajor);
router.delete("/majors/:id", controller.deleteMajor);

router.get("/students", controller.getStudents);
router.get("/students/:id", controller.getStudentById);
router.post("/students", controller.insertStudent);
router.delete("/students/:id", controller.deleteStudent);

module.exports = router;
