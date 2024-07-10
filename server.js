const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Path to the .well-known directory
const wellKnownPath = path.join(__dirname, '.well-known');

// CORS configuration
const corsOptions = {
  origin: 'https://paypal-apple-pay.onrender.com', // Corrected frontend domain
  optionsSuccessStatus: 200
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// Serve the .well-known directory
app.use('/.well-known', express.static(wellKnownPath));

// Example route for testing
app.get('/paypal-config', (req, res) => {
  // Example response with the extracted client ID
  res.json({
    clientId: 'AaF3x4iq4bsKKonOBX9fVMarJwTojQJYfN5D4jMXdxw3odvvLOkj-EWqTmzus7miBn35D9XrhhbfRKGA',
    enableFunding: 'applepay'
  });
});

// Error handling for CORS issues
app.use((err, req, res, next) => {
  if (err.name === 'CorsError') {
    res.status(400).json({ message: 'CORS error', details: err.message });
  } else {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
