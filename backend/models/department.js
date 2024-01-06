const connection = require('../configs/db');

class Department {
  static getAllDepartments(callback) {
    const query = 'SELECT * FROM departments';
    connection.query(query, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static addDepartment(name, code, callback) {
    const query = 'INSERT INTO departments (name, code) VALUES (?, ?)';
    connection.query(query, [name, code], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
  
  static updateDepartment(departmentId, newName, newCode, callback) {
    const query = 'UPDATE departments SET name = ?, code = ? WHERE id = ?';
    connection.query(query, [newName, newCode, departmentId], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static deleteDepartment(departmentId, callback) {
    const query = 'DELETE FROM departments WHERE id = ?';
    connection.query(query, [departmentId], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Department;