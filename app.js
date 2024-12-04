// index.js
//require('./src/data/concrete/sqlite/init');

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('./src/middleware/logger'); // Import the logger middleware
const routes = require("./src/routes");
const cors = require('cors');
const mongodb = require('./src/data/concrete/mongo/mongodb');


app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(bodyParser.json());
app.use(logger); // Use the logger middleware
app.use(cors('*'));


app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  app.use("/", routes);
  mongodb.connect();
  // sqlite.connect();
  console.log(`Server is running on port ${PORT}`);
});
