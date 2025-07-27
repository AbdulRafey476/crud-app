const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// DB Connection Using Mongoose
mongoose.connect('mongodb+srv://AbdulRafey:NzL3cmFozf1CoTHx@cluster0.tnjqsig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log("Database Connected"));

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