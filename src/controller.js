const pool = require("./db");
const queries = require("./queries");

// SCHOOLS
const getSchools = (req, res) => {
  pool.query(queries.getSchools, (error, result) => {
    if (error) {
      res.status(400).send({
        error: error.message,
      });
    }
    res.status(200).json(result.rows);
  });
};

const getSchoolById = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400).send({ error: "School id provided in wrong format." });
    return;
  }

  pool.query(queries.getSchoolById, [id], (error, result) => {
    if (error) {
      res.status(400).send({
        error: error.message,
      });
    }
    if (result.rows.length === 0) {
      res.status(404).send({ error: "School does not exist!" });
    }
    res.status(200).json(result.rows[0]);
  });
};

const insertSchool = (req, res) => {
  const { sch_name } = req.body;
  pool.query(queries.insertSchool, [sch_name], (error, result) => {
    if (error) {
      res.status(400).send({
        error: error.message,
        message: "School body is not in the valid format or a field is null.",
      });
      return;
    }
    res.status(200).send({ message: "School inserted successfully!" });
  });
};

const deleteSchool = (req, res) => {
  const school_id = req.params.id && parseInt(req.params.id);

  if (school_id !== undefined && isNaN(school_id)) {
    res.status(400).send({ message: "School id must be a legal integer." });
    return;
  }

  if (school_id) {
    pool.query(queries.getSchoolById, [school_id], (error, result) => {
      if (error) {
        res.status(400).send({
          error: error.message,
        });
        return;
      }

      if (result.rows.length === 0) {
        res.status(404).send({ error: "School does not exist!" });
        return;
      }

      pool.query(queries.deleteSchool, [school_id], (error, result) => {
        if (error) {
          res.status(400).send({ error: error.message });
          return;
        }
        res.status(200).send({ message: "School, school's majors & school's students deleted successfully!" });
      });
    });
  }
};

// MAJORS
const getMajors = (req, res) => {
  const school_id = req.query.school_id && parseInt(req.query.school_id);

  if (school_id !== undefined && isNaN(school_id)) {
    res.status(400).send({ message: "School id must be a legal integer." });
    return;
  }

  if (school_id) {
    pool.query(queries.getMajorsBySchool, [school_id], (error, result) => {
      if (error) {
        res.status(400).send({ error: error.message });
        return;
      }
      res.status(200).json(result.rows);
      return;
    });
  } else {
    pool.query(queries.getMajors, (error, result) => {
      if (error) {
        res.status(400).send({
          error: error.message,
        });
      }
      res.status(200).json(result.rows);
    });
  }
};

const getMajorById = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400).send({ error: "Major id provided in wrong format." });
    return;
  }

  pool.query(queries.getMajorById, [id], (error, result) => {
    if (error) {
      res.status(400).send({
        error: error.message,
      });
    }
    if (result.rows.length === 0) {
      res.status(404).send({ error: "Major does not exist!" });
    }
    res.status(200).json(result.rows[0]);
  });
};

const insertMajor = (req, res) => {
  const { sch_id, m_name, m_codename } = req.body;
  pool.query(queries.insertMajor, [sch_id, m_name, m_codename], (error, result) => {
    if (error) {
      res.status(400).send({
        error: error.message,
        message: "Major body is not in the valid format or a field is null.",
      });
      return;
    }
    res.status(200).send({ message: "Major inserted successfully!" });
  });
};

const deleteMajor = (req, res) => {
  const major_id = req.params.id && parseInt(req.params.id);

  if (major_id !== undefined && isNaN(major_id)) {
    res.status(400).send({ message: "Major id must be a legal integer." });
    return;
  }

  if (major_id) {
    pool.query(queries.getMajorById, [major_id], (error, result) => {
      if (error) {
        res.status(400).send({
          error: error.message,
        });
        return;
      }

      if (result.rows.length === 0) {
        res.status(404).send({ error: "Major does not exist!" });
        return;
      }

      pool.query(queries.deleteMajor, [major_id], (error, result) => {
        if (error) {
          res.status(400).send({ error: error.message });
          return;
        }
        res.status(200).send({ message: "Major deleted successfully!" });
      });
    });
  }
};

// STUDENTS
const getStudents = (req, res) => {
  const school_id = req.query.school_id && parseInt(req.query.school_id);

  if (school_id !== undefined && isNaN(school_id)) {
    res.status(400).send({ message: "School id must be a legal integer." });
    return;
  }

  if (school_id) {
    pool.query(queries.getStudentsBySchool, [school_id], (error, result) => {
      if (error) {
        res.status(400).send({ error: error.message });
        return;
      }
      res.status(200).json(result.rows);
      return;
    });
  } else {
    pool.query(queries.getStudents, (error, result) => {
      if (error) {
        res.status(400).send({
          error: error.message,
        });
      }
      res.status(200).json(result.rows);
    });
  }
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400).send({ error: "Student id provided in wrong format." });
    return;
  }

  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) {
      res.status(400).send({
        error: error.message,
      });
    }
    if (result.rows.length === 0) {
      res.status(404).send({ error: "Student does not exist!" });
    }
    res.status(200).json(result.rows[0]);
  });
};

const insertStudent = (req, res) => {
  const { m_id, s_fname, s_lname, s_personal_email, s_uni_email, s_contact_tel, s_alt_tel, s_dob } = req.body;
  pool.query(queries.insertStudent, [m_id, s_fname, s_lname, s_personal_email, s_uni_email, s_contact_tel, s_alt_tel, s_dob], (error, result) => {
    if (error) {
      res.status(400).send({
        error: error.message,
        message: "Student body is not in the valid format or a field is null.",
      });
      return;
    }
    res.status(200).send({ message: "Student inserted successfully!" });
  });
};

const deleteStudent = (req, res) => {
  const student_id = req.params.id && parseInt(req.params.id);

  if (student_id !== undefined && isNaN(student_id)) {
    res.status(400).send({ message: "Student id must be a legal integer." });
    return;
  }

  if (student_id) {
    pool.query(queries.getStudentById, [student_id], (error, result) => {
      if (error) {
        res.status(400).send({
          error: error.message,
        });
        return;
      }

      if (result.rows.length === 0) {
        res.status(404).send({ error: "Student does not exist!" });
        return;
      }

      pool.query(queries.deleteStudent, [student_id], (error, result) => {
        if (error) {
          res.status(400).send({ error: error.message });
          return;
        }
        res.status(200).send({ message: "Student deleted successfully!" });
      });
    });
  }
};

module.exports = {
  getSchools,
  getSchoolById,
  insertSchool,
  deleteSchool,
  getMajors,
  getMajorById,
  insertMajor,
  deleteMajor,
  getStudents,
  getStudentById,
  insertStudent,
  deleteStudent,
};
