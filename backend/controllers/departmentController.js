const Department = require('../models/department');

const departmentController = {
  getAllDepartments: (req, res) => {
    Department.getAllDepartments(results => {
      res.json(results);
    });
  },

  addDepartment: (req, res) => {
    const { name, code } = req.body;
    Department.addDepartment(name, code, results => {
      res.json(results);
    });
  },

  updateDepartment: (req, res) => {
    const departmentId = req.params.id;
    const { name, code } = req.body; // Add code field to the destructuring assignment
    Department.updateDepartment(departmentId, name, code, results => { // Pass the code field to the updateDepartment function
      res.json(results);
    });
  },
  deleteDepartment: (req, res) => {
    const departmentId = req.params.id;
    Department.deleteDepartment(departmentId, results => {
      res.json(results);
    });
  }
};

module.exports = departmentController;