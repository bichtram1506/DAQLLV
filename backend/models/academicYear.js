const connection = require('../configs/db');

class AcademicYear {
  static getAllAcademicYears(callback) {
    const query = 'SELECT * FROM academic_years';
    connection.query(query, (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static addAcademicYear(start_date, end_date, callback) {
    const query = 'INSERT INTO academic_years (start_date, end_date) VALUES (?, ?)';
    connection.query(query, [start_date, end_date], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static updateAcademicYear(academicYearId, start_date, end_date, callback) {
    const query = 'UPDATE academic_years SET start_date = ?, end_date = ? WHERE id = ?';
    connection.query(query, [start_date, end_date, academicYearId], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static deleteAcademicYear(academicYearId, callback) {
    const query = 'DELETE FROM academic_years WHERE id = ?';
    connection.query(query, [academicYearId], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = AcademicYear;