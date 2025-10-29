const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',         // change if needed
  password: 'mypassword', // your MySQL password
  database: 'army'        // your database name
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL successfully!');
  }
});

// ✅ GET API
app.get('/', (req, res) => {
  res.send('✅ Express is running!');
});


// app.get('/get', (req, res) => {
//   console.log("📩 GET /get called");
//   db.query('SELECT * FROM shows', (err, results) => {
//     if (err) {
//       console.error('❌ Error fetching data:', err);
//       return res.status(500).json({ error: 'Failed to fetch data' });
//     }
//     res.json(results);
//   });
// });

app.get('/get', (req, res) => {
  db.query('SELECT * FROM shows', (err, results) => {
    if (err) {
      console.error('❌ SQL Error:', err.sqlMessage);
      return res.status(500).json({ error: err.sqlMessage });
    }
    res.json(results);
  });
});


// ✅ POST API
// app.post('/api/data', (req, res) => {
//   const { Id, Title, Type, Director, Budget, Location, Duration, Year_time, Actions } = req.body;
//   const sql = `INSERT INTO shows 
//     (Id, Title, Type, Director, Budget, Location, Duration, Year_time, Actions)
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   db.query(sql, [Id, Title, Type, Director, Budget, Location, Duration, Year_time, Actions], (err, result) => {
//     if (err) {
//       console.error('❌ Error inserting data:', err);
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(201).json({ message: '✅ Data inserted successfully' });
//   });
// });

app.post('/api/data', (req, res) => {
  const { Id, Title, Type, Director, Budget, Location, Duration, Year_time, Actions } = req.body;
  const sql = `INSERT INTO shows 
    (Id, Title, Type, Director, Budget, Location, Duration, Year_time, Actions)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [Id, Title, Type, Director, Budget, Location, Duration, Year_time, Actions], (err, result) => {
    if (err) {
      console.error('❌ SQL Insert Error:', err.sqlMessage);
      return res.status(500).json({ error: err.sqlMessage });
    }
    res.status(201).json({ message: '✅ Data inserted successfully' });
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



// ✅ Server start
const PORT = 3002;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
