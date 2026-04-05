require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');



const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://portfolio-frontend-kmoh.onrender.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());


// Basic root route
app.get('/', (req, res) => {
  res.send('Portfolio API is running');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected');

  // Mount routes only after DB connects
  app.use('/api/messages', messageRoutes);

  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err);
  process.exit(1); // Exit if DB fails to connect
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global Error:', err);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});
