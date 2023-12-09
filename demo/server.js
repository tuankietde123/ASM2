const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webnh'
});

connection.connect();

// Route xử lý đăng ký
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    connection.query(sql, [username, password], (err, result) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Failed to sign up' });
        } else {
            res.status(200).json({ success: true, message: 'Signed up successfully' });
        }
    });
});

// Route xử lý đăng nhập
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(sql, [username, password], (err, result) => {
        if (err || result.length === 0) {
            res.status(401).json({ success: false, message: 'Login failed' });
        } else {
            res.status(200).json({ success: true, message: 'Login successful' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
