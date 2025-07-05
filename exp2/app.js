const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Setup view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Show form
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission and save data
app.post('/submit', (req, res) => {
  const userData = req.body;

  // Save to data.json (overwrite)
  fs.writeFile('data.json', JSON.stringify(userData, null, 2), (err) => {
    if (err) return res.status(500).send('Error saving data');
    res.redirect('/data');
  });
});

// Show saved data using Handlebars
app.get('/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, jsonData) => {
    if (err) return res.status(500).send('Error reading data');

    const parsedData = JSON.parse(jsonData);
    res.render('data', { user: parsedData });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
