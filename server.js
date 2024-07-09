const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Path to the .well-known directory
const wellKnownPath = path.join(__dirname, '.well-known');

// Serve the .well-known directory
app.use('/.well-known', express.static(wellKnownPath));

// Example route for testing
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
