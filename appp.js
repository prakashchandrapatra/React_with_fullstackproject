// Import required modules
const express = require('express');
const mysql = require('mysql2');

// Create Express app
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = 3002;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',       // usually 'localhost'
  user: 'myuser',            // your MySQL username
  password: 'mypassword', // your  password
  database: 'army'  // name of the database in MySQL Workbench
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL successfully!');
  }
});

// Test route
app.get('/get', (req, res) => {
// console.log(req.body)
  db.query('SELECT * FROM shows', (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching data');
    }
    res.json(results);
  });
});

app.post('/api/data', (req, res) => {
  const { Id ,Title, Type, Director,Budget,Location,Duration,Year_time,Actions } = req.body;
  console.log(req.body);
//   const sql = 'INSERT INTO favorite_show (EMPLOYEE_ID, NAME, SALARY) VALUES (?, ?, ?)';
const sql = 'INSERT INTO shows (Id ,Title, Type, Director,Budget,Location,Duration,Year_time,Actions) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [Id ,Title, Type, Director,Budget,Location,Duration,Year_time,Actions], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log("User added successfully");
    res.status(201).json({ message: 'User added successfully' });
  });
});

// DELETE record by ID
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM shows WHERE id = ?';  // your table name
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting record:', err);
      return res.status(500).json({ message: 'Error deleting record' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json({ message: 'Record deleted successfully' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
