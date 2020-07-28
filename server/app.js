const dotenv = require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');

const absolutePath = path.resolve(__dirname + '/build');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('build'));

app.get('/api', (req, res) => {
  res.statusCode = 200;
  res.json({})
});

app.get('*', (req, res) => {
  res.sendFile(absolutePath + '/index.html');
});


app.listen(process.env.PORT, () => {
  console.log('Server is running on port:', process.env.PORT);
});

