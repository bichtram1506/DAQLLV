const express = require('express');
const router = express.Router();
const specializationController = require('../controllers/specializationController');

// Route to get all specializations
router.get('/', (req, res) => {
  specializationController.getAllSpecializations(req, res);
});

// Route to add a new specialization
router.post('/add', (req, res) => {
  specializationController.addSpecialization(req, res);
});

// Route to update a specialization
router.put('/:id', (req, res) => {
  specializationController.updateSpecialization(req, res);
});

// Route to delete a specialization
router.delete('/:id', (req, res) => {
  specializationController.deleteSpecialization(req, res);
});

module.exports = router;