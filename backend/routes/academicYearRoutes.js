const express = require('express');
const router = express.Router();
const academicYearController = require('../controllers/academicYearController');

// GET /academic_years - Lấy danh sách tất cả các năm học
router.get('/', (req, res) => {
  academicYearController.getAllAcademicYears(req, res);
});

// POST /academic_years/add - Thêm một năm học mới
router.post('/add', (req, res) => {
  academicYearController.addAcademicYear(req, res);
});

// DELETE /academic_years/:id - Xóa một năm học theo ID
router.delete('/:id', (req, res) => {
  academicYearController.deleteAcademicYear(req, res);
});

// PUT /academic_years/:id - Sửa một năm học theo ID
router.put('/:id', (req, res) => {
  academicYearController.updateAcademicYear(req, res);
});

module.exports = router;