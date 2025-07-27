const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send("hello world");
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});