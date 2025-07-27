const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();

// DB Connection Using Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch(err => console.error('MongoDB Connection Error:', err));;

// Middlewares
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // For Enabling Put and Del Request On Frontend
app.set('view engine', 'ejs');

// Routes
app.use('/', itemRoutes);


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});