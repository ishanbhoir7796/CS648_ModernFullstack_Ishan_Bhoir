import express from 'express';
import path from 'path';

const app = express();

// Serve files from public folder
app.use(express.static(path.join(process.cwd(), 'public')));

// Route '/' to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Start server
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});