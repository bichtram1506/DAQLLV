const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Tạo khóa bí mật ngẫu nhiên với độ dài 32 byte (256 bit)
const secretKey = crypto.randomBytes(32).toString('hex');
const userController = {
  getAllUsers: (req, res) => {
    User.getAllUsers((error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  },

  registerUser: (req, res) => {
    const { name, password } = req.body;
    User.registerUser(name, password, (error, results) => {
        res.json(results);
    });
  },
  getUserByUsername: (name, callback) => {
    // Thực hiện logic để lấy người dùng theo tên đăng nhập
    // Gọi lại callback với kết quả hoặc lỗi nếu có
    UserDB.findOne({ name: name }, (error, user) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, user);
      }
    });
  },
  loginUser: (req, res) => {
    const { name, password } = req.body;
    User.getUserByUsername(name, (error, user) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Sử dụng khóa bí mật thực sự thay cho 'your-secret-key'
            const secretKey = process.env.JWT_SECRET_KEY; // Lấy khóa bí mật từ biến môi trường hoặc nơi lưu trữ an toàn
            const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

            res.json({ token });
        });
    });
  },
  updateUser: (req, res) => {
    const userId = req.params.id;
    const { name, password } = req.body;
    User.updateUser(userId, name, password, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  },

  deleteUser: (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  }
};

module.exports = userController;