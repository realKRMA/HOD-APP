const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const coursesRouter = require('./routes/courses');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/courses', coursesRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));
