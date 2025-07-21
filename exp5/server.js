const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Path to tasks file
const TASK_FILE = path.join(__dirname, 'tasks.json');

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from 'public' folder

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get tasks from tasks.json
app.get('/tasks', (req, res) => {
  fs.readFile(TASK_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading tasks file');
    }
    const tasks = JSON.parse(data || '[]');
    res.json(tasks);
  });
});

// Add new task
app.post('/tasks', (req, res) => {
  const newTask = req.body.task;
  fs.readFile(TASK_FILE, 'utf8', (err, data) => {
    let tasks = [];
    if (!err && data) {
      tasks = JSON.parse(data);
    }

    tasks.push(newTask);

    fs.writeFile(TASK_FILE, JSON.stringify(tasks, null, 2), err => {
      if (err) return res.status(500).send('Error saving task');
      res.status(200).send('Task added successfully');
    });
  });
});

// Overwrite the task list (used for edit and delete)
app.post('/overwrite', (req, res) => {
  const newTasks = req.body.tasks;
  fs.writeFile(TASK_FILE, JSON.stringify(newTasks, null, 2), err => {
    if (err) return res.status(500).send('Failed to update tasks');
    res.status(200).send('Tasks updated');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
