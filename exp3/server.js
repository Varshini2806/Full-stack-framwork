const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://varshinithirunavukkarasu206:8SZJwPaPzw20NtsQ@cluster0.memkp0d.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Define Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// Create Model
const Student = mongoose.model('Student', studentSchema);

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// ROUTES

// Display form to add student
app.get('/', (req, res) => {
  res.render('form', { student: null });
});

// Submit form to DB
app.post('/add-student', async (req, res) => {
  try {
    await Student.create(req.body);
    res.redirect('/students');
  } catch (err) {
    res.send("Error adding student: " + err.message);
  }
});

// List all students
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.render('list', { students });
});

// Display edit form
app.get('/edit/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render('form', { student });
});

// Submit update
app.post('/edit/:id', async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/students');
});

// Delete student
app.get('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/students');
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
