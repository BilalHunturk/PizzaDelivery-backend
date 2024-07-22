// index.js
//require('./src/data/concrete/sqlite/init');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('./src/middleware/logger'); // Import the logger middleware
const routes = require("./src/routes");

app.use(bodyParser.json());
app.use(logger); // Use the logger middleware

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  app.use("/", routes);
  console.log(`Server is running on port ${PORT}`);
});
