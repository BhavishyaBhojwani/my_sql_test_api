const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Create a new task
router.post('/createtasks', taskController.createTask);
router.get('/gettasks', taskController.getAllTasks); // Get all tasks

module.exports = router;
