const Task = require('../models/taskModel');

// Create a new task
exports.createTask = (req, res) => {
  const { title, description, prioritylevel, duedate } = req.body;

  // Validate request body
  if (!title || !description || prioritylevel === null || !duedate) {
    return res.status(400).json({ status: "failed", message: "All fields are required" });
  }

  // Create the task
  const newTask = { title, description, prioritylevel, duedate };

  Task.create(newTask, (error, result) => {
    if (error) {
      return res.status(500).json({ status: "failed", message: "Failed to create task" });
    }
    res.status(200).json({ status: "success", message: "Task created successfully" });
  });
};

// Get all tasks
exports.getAllTasks = (req, res) => {
  Task.getAll((error, results) => {
    if (error) {
      return res.status(500).json({ status: "failed", message: "Failed to fetch tasks" });
    }
    res.status(200).json({ status: "success", tasks: results });
  });
};
