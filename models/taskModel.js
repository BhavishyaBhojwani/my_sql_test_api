const db = require('../config/db');

// Task model for creating and getting tasks
const Task = {
  create: (task, callback) => {
    const query = 'INSERT INTO tasks (title, description, prioritylevel, duedate) VALUES (?, ?, ?, ?)';
    db.query(query, [task.title, task.description, task.prioritylevel, task.duedate], callback);
  },
  
  getAll: (callback) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, callback);
  },
};

module.exports = Task;
