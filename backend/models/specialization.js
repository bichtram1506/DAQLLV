const connection = require('../configs/db');

class Specialization {
    static getAllSpecializations(callback) {
        const query = 'SELECT specializations.*, departments.name AS department_name FROM specializations LEFT JOIN departments ON specializations.department_id = departments.id';
        connection.query(query, (error, results) => {
          if (error) {
            throw error;
          }
          callback(results);
        });
      }
    
      static addSpecialization(departmentId, code, name, callback) {
        const query = 'INSERT INTO specializations (department_id, code, name) VALUES (?, ?, ?)';
        connection.query(query, [departmentId, code, name], (error, results) => {
          if (error) {
            throw error;
          }
          callback(results);
        });
      }
    
      static updateSpecialization(id, departmentId, code, name, callback) {
        const query = 'UPDATE specializations SET department_id = ?, code = ?, name = ? WHERE id = ?';
        connection.query(query, [departmentId, code, name, id], (error, results) => {
          if (error) {
            throw error;
          }
          callback(results);
        });
      }
      static deleteSpecialization(id, callback) {
        const query = 'DELETE FROM specializations WHERE id = ?';
        connection.query(query, [id], (error, results) => {
          if (error) {
            throw error;
          }
          callback(results);
        });
      }
    }
    
    module.exports = Specialization;