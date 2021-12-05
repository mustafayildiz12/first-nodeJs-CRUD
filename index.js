const mongoose = require('mongoose');
const students = require('./routes/students');
const post = require('./routes/post');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/students', students);
app.use('/post', post);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));