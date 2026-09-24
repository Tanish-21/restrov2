import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import cardRoute from './routes/card.js';
import catRoute from './routes/cat.js';


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http:restrov2.vercel.app",
    credentials: true
}));

dotenv.config();

const port = process.env.BACKEND_PORT || 5000;

// Routes
app.use('/api/auth', authRoute);
app.use('/api/foods', cardRoute);
app.use('/api/categories', catRoute)


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 