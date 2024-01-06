const AcademicYear = require('../models/academicYear');

const academicYearController = {
  getAllAcademicYears: (req, res) => {
    AcademicYear.getAllAcademicYears(results => {
      res.json(results);
    });
  },

  addAcademicYear: (req, res) => {
    const { start_date, end_date } = req.body;
    AcademicYear.addAcademicYear(start_date, end_date, results => {
      res.json(results);
    });
  },

  updateAcademicYear: (req, res) => {
    const academicYearId = req.params.id;
    const { start_date, end_date } = req.body;
    AcademicYear.updateAcademicYear(academicYearId, start_date, end_date, results => {
      res.json(results);
    });
  },

  deleteAcademicYear: (req, res) => {
    const academicYearId = req.params.id;
    AcademicYear.deleteAcademicYear(academicYearId, results => {
      res.json(results);
    });
  }
};

module.exports = academicYearController;