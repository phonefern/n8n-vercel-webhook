const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// POST webhook route
app.post('/webhook/linehook', (req, res) => {
  console.log('✅ Webhook triggered');
  console.log('📦 Headers:', req.headers);
  console.log('📨 Body:', req.body);

  res.status(200).send('✅ Webhook received and processed');
});

// Root route
app.get('/', (req, res) => {
  res.send('✅ Webhook server is running');
});

// Start server (only in local dev; Vercel handles serverless deployments)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
}

// Export app for Vercel
module.exports = app;
