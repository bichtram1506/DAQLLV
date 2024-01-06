const Specialization = require('../models/specialization');

// Controller function to get all specializations
exports.getAllSpecializations = (req, res) => {
  Specialization.getAllSpecializations((results) => {
    res.json(results);
  });
};

// Controller function to add a new specialization
exports.addSpecialization = (req, res) => {
  const { departmentId, code, name } = req.body;
  Specialization.addSpecialization(departmentId, code, name, (results) => {
    res.json(results);
  });
};

// Controller function to update a specialization
exports.updateSpecialization = (req, res) => {
  const { id } = req.params;
  const { departmentId, code, name } = req.body;
  Specialization.updateSpecialization(id, departmentId, code, name, (results) => {
    res.json(results);
  });
};

// Controller function to delete a specialization
exports.deleteSpecialization = (req, res) => {
  const { id } = req.params;
  Specialization.deleteSpecialization(id, (results) => {
    res.json(results);
  });
};
