const express = require('express');
const router = express.Router();
const trainingSystemController = require('../controllers/trainingSystemController');

// GET /training_systems - Lấy danh sách tất cả các hệ đào tạo
router.get('/', (req, res) => {
  trainingSystemController.getAllTrainingSystems(req, res);
});

// POST /training_systems/add - Thêm một hệ đào tạo mới
router.post('/add', (req, res) => {
  trainingSystemController.addTrainingSystem(req, res);
});

// DELETE /training_systems/:id - Xóa một hệ đào tạo theo ID
router.delete('/:id', (req, res) => {
  trainingSystemController.deleteTrainingSystem(req, res);
});

// PUT /training_systems/:id - Sửa một hệ đào tạo theo ID
router.put('/:id', (req, res) => {
  trainingSystemController.updateTrainingSystem(req, res);
});

module.exports = router;