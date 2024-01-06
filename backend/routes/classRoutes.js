const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classController');

// GET /classes - Lấy danh sách tất cả các lớp học
router.get('/', (req, res) => {
  classesController.getAllClasses(req, res);
});

// POST /classes/add - Thêm một lớp học mới
router.post('/add', (req, res) => {
  classesController.addClass(req, res);
});

// DELETE /classes/:id - Xóa một lớp học theo ID
router.delete('/:id', (req, res) => {
  classesController.deleteClass(req, res);
});

// PUT /classes/:id - Sửa một lớp học theo ID
router.put('/:id', (req, res) => {
  classesController.updateClass(req, res);
});

module.exports = router;