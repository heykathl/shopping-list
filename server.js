const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

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
  .connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err.message));

// Use routes
app.use("/api/items", items);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});