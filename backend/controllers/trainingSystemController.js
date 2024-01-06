const TrainingSystem = require('../models/trainingSystem');

const trainingSystemController = {
  getAllTrainingSystems: (req, res) => {
    TrainingSystem.getAllTrainingSystems(results => {
      res.json(results);
    });
  },

  addTrainingSystem: (req, res) => {
    const { name, code } = req.body;
    TrainingSystem.addTrainingSystem(name, code, results => {
      res.json(results);
    });
  },

  updateTrainingSystem: (req, res) => {
    const trainingSystemId = req.params.id;
    const { name, code } = req.body;
    TrainingSystem.updateTrainingSystem(trainingSystemId, name, code, results => {
      res.json(results);
    });
  },
  
  deleteTrainingSystem: (req, res) => {
    const trainingSystemId = req.params.id;
    TrainingSystem.deleteTrainingSystem(trainingSystemId, results => {
      res.json(results);
    });
  }
};

module.exports = trainingSystemController;