const dotenv = require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');

const absolutePath = path.resolve(__dirname + '/build');

const index = express();
index.use(cors());
index.use(express.urlencoded({ extended: false }));
index.use(express.json());

index.use(express.static('build'));

index.get('/api', (req, res) => {
  res.statusCode = 200;
  res.json({})
});

index.get('*', (req, res) => {
  res.sendFile(absolutePath + '/index.html');
});


index.listen(process.env.PORT, () => {
  console.log('Server is running on port:', process.env.PORT);
});

