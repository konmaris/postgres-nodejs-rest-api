const getSchools = "SELECT * FROM schools";
const getSchoolById = "SELECT * FROM schools WHERE sch_id = $1";
const insertSchool = "INSERT INTO schools(sch_name) VALUES ($1)";
const deleteSchool = "DELETE FROM schools WHERE sch_id = $1";

const getMajors = "SELECT * FROM majors";
const getMajorsBySchool = "SELECT * FROM majors WHERE sch_id = $1";
const getMajorById = "SELECT * FROM majors WHERE m_id = $1";
const insertMajor = "INSERT INTO majors(sch_id, m_name, m_codename) VALUES ($1, $2, $3)";
const deleteMajor = "DELETE FROM majors WHERE m_id = $1";

const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE s_id = $1";
const getStudentsBySchool = "SELECT students.* FROM schools INNER JOIN majors ON schools.sch_id=majors.sch_id INNER JOIN students ON majors.m_id=students.m_id WHERE majors.sch_id = $1";
const insertStudent = "INSERT INTO students(m_id, s_fname, s_lname, s_personal_email, s_uni_email, s_contact_tel, s_alt_tel, s_dob) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const deleteStudent = "DELETE FROM students WHERE s_id = $1";

module.exports = {
  getSchools,
  getSchoolById,
  insertSchool,
  deleteSchool,
  getMajors,
  getMajorsBySchool,
  getMajorById,
  insertMajor,
  deleteMajor,
  getStudents,
  getStudentById,
  getStudentsBySchool,
  insertStudent,
  deleteStudent,
};
