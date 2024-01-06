const connection = require('../configs/db');

class TrainingSystem {
  static getAllTrainingSystems(callback) {
    const query = 'SELECT * FROM training_systems';
    connection.query(query, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static addTrainingSystem(name, code, callback) {
    const query = 'INSERT INTO training_systems (name, code) VALUES (?, ?)';
    connection.query(query, [name, code], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
  
  static updateTrainingSystem(trainingSystemId, newName, newCode, callback) {
    const query = 'UPDATE training_systems SET name = ?, code = ? WHERE id = ?';
    connection.query(query, [newName, newCode, trainingSystemId], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static deleteTrainingSystem(trainingSystemId, callback) {
    const query = 'DELETE FROM training_systems WHERE id = ?';
    connection.query(query, [trainingSystemId], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = TrainingSystem;