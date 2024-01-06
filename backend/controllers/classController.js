const Classes = require('../models/class');

const classesController = {
  getAllClasses: (req, res) => {
    Classes.getAllClasses(results => {
      res.json(results);
    });
  },

  addClass: (req, res) => {
    const {
      department_id,
      trainingsystem_id,
      academicyear_id,
      code,
      name,
      enrollment
    } = req.body;

    Classes.addClass(
      department_id,
      trainingsystem_id,
      academicyear_id,
      code,
      name,
      enrollment,
      results => {
        res.json(results);
      }
    );
  },

  updateClass: (req, res) => {
    const classId = req.params.id;
    const {
      department_id,
      trainingsystem_id,
      academicyear_id,
      code,
      name,
      enrollment
    } = req.body;

    Classes.updateClass(
      classId,
      department_id,
      trainingsystem_id,
      academicyear_id,
      code,
      name,
      enrollment,
      results => {
        res.json(results);
      }
    );
  },

  deleteClass: (req, res) => {
    const classId = req.params.id;
    Classes.deleteClass(classId, results => {
      res.json(results);
    });
  }
};

module.exports = classesController;