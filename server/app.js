const dotenv = require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const xml = require('xml');

const absolutePath = path.resolve(__dirname + '/build');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('build'));

app.get('/feed', (req, res) => {
  res.set('Content-Type', 'text/xml');
  res.send(xml({
    rss: [
      {
        channel: [
          {
            title: 'mateuszjablonski.com',
          },
          {
            link: 'https://mateuszjablonski.com',
          },
          {
            description: 'Blog - Programowanie - Nauka - Rozwój'
          },
          {
            language: 'pl-PL'
          },
          {
            item: [
              {
                title: 'dsad'
              },
              {
                pubDate: 'Mon, 13 Jul 2020 16:58:00 +0000'
              },
              {
                description: 'dasdadsads'
              },
              {
                link: '//local.host/adb'
              }
            ]
          }
        ]
      }
    ],
  }, {
    declaration: { standalone: 'yes', encoding: 'UTF-8' }
  }));
});

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

