const connection = require('../configs/db');

class Classes {
  static getAllClasses(callback) {
    const query = 'SELECT * FROM classes';
    connection.query(query, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static addClass(
    department_id,
    trainingsystem_id,
    academicyear_id,
    code,
    name,
    enrollment,
    callback
  ) {
    const query =
      'INSERT INTO classes (department_id, trainingsystem_id, academicyear_id, code, name, enrollment) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(
      query,
      [
        department_id,
        trainingsystem_id,
        academicyear_id,
        code,
        name,
        enrollment
      ],
      (error, results) => {
        if (error) throw error;
        callback(results);
      }
    );
  }

  static updateClass(
    classId,
    department_id,
    trainingsystem_id,
    academicyear_id,
    code,
    name,
    enrollment,
    callback
  ) {
    const query =
      'UPDATE classes SET department_id = ?, trainingsystem_id = ?, academicyear_id = ?, code = ?, name = ?, enrollment = ? WHERE id = ?';
    connection.query(
      query,
      [
        department_id,
        trainingsystem_id,
        academicyear_id,
        code,
        name,
        enrollment,
        classId
      ],
      (error, results) => {
        if (error) throw error;
        callback(results);
      }
    );
  }

  static deleteClass(classId, callback) {
    const query = 'DELETE FROM classes WHERE id = ?';
    connection.query(query, [classId], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Classes;