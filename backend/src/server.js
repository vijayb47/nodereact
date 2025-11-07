const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Node.js backend on AKS!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
