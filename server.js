const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();

const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

dotenv.config({ path: "./config/keys.env" });

// Bodyparser middleware
app.use(bodyParser.json());

// MongoDB URI
const uri = process.env.ATLAS_URI;

// Connect to Mongo
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err.message));

// Use routes
app.use("/api/items", items);

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});