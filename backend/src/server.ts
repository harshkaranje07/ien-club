import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// ---------------- SECURITY ----------------
app.use(helmet());

// ---------------- CORS FIX ----------------
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ---------------- BODY PARSER ----------------
app.use(express.json());

// ---------------- RATE LIMIT ----------------
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/api', limiter);

// ---------------- DATABASE ----------------
const mongoUri = process.env.MONGO_URI;

if (mongoUri && (mongoUri.startsWith('mongodb://') || mongoUri.startsWith('mongodb+srv://'))) {
  mongoose.connect(mongoUri)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
} else {
  console.warn('Valid MONGO_URI not found. Running without database connection.');
}

// ---------------- HEALTH CHECK ----------------
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'EnnovateX API is running'
  });
});

// ---------------- API ROUTES ----------------
app.use('/api', apiRoutes);

// ---------------- 404 ----------------
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

// ---------------- GLOBAL ERROR ----------------
app.use((err: any, req: Request, res: Response, next: NextFunction) => {

  console.error('Unhandled Error:', err);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });

});

// ---------------- SERVER ----------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});