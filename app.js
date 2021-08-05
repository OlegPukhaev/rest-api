const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

// c
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(3000, () => console.log('Serer has been started on port 3000...'));
