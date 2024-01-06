const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', (req, res) => {
    userController.loginUser(req, res);
  });
  
module.exports = router;