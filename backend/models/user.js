const connection = require('../configs/db');
const bcrypt = require('bcrypt');

class User {
    static loginUser(name, password, callback) {
        const query = 'SELECT * FROM users WHERE name = ? LIMIT 1';
      
        connection.query(query, [name], (error, results) => {
          if (error) {
            callback(error, null);
          } else {
            if (results.length > 0) {
              const user = results[0];
              bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                  callback(null, user);
                } else {
                  callback('Mật khẩu không đúng', null);
                }
              });
            } else {
              callback('Người dùng không tồn tại', null);
            }
          }
        });
      }
    
  static registerUser(name, password, callback) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
    connection.query(query, [name, hashedPassword], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

static getAllUsers(callback) {
    const query = 'SELECT * FROM users';
    connection.query(query, (error, results) => {
      if (error) {
        console.error(error);
        return callback(error, null);
      }
      callback(null, results);
    });
  }
static deleteUser(userId, callback) {
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(query, [userId], (error, results) => {
      if (error) {
        console.error(error);
        return callback(error);
      }
      callback(null);
    });
  }
}
module.exports = User;