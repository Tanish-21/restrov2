import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';


const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const port = process.env.BACKEND_PORT || 5000;

// Routes
app.use('/api/auth', authRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 