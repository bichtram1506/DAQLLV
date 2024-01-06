const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /users/register - Đăng ký người dùng
router.post('/register', (req, res) => {
  userController.registerUser(req, res);
});

// GET /users - Lấy danh sách người dùng
router.get('/', (req, res) => {
  userController.getAllUsers(req, res);
});

// DELETE /users/:id - Xóa người dùng bằng ID
router.delete('/:id', (req, res) => {
  userController.deleteUser(req, res);
});

module.exports = router;