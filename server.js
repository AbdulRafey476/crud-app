const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();


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