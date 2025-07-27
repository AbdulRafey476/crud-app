const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();

const app = express();

// DB Connection Using Mongoose
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Database Connected"));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // For Enabling Put and Del Request On Frontend

// Routes
app.get('/', (req, res) => {
  res.send("hello world");
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});