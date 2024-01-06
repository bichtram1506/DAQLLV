const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// GET /departments - Lấy danh sách tất cả các khoa
router.get('/', (req, res) => {
  departmentController.getAllDepartments(req, res);
});

// POST /departments/add - Thêm một khoa mới
router.post('/add', (req, res) => {
  departmentController.addDepartment(req, res);
});

// DELETE /departments/:id - Xóa một khoa theo ID
router.delete('/:id', (req, res) => {
  departmentController.deleteDepartment(req, res);
});

// PUT /departments/:id - Sửa một khoa theo ID
router.put('/:id', (req, res) => {
  departmentController.updateDepartment(req, res);
});
module.exports = router;